import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import { TeamOutlined, BankOutlined, FileTextOutlined } from '@ant-design/icons';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import axiosClient from '../api/axiosClient';

export default function Dashboard() {
  const [stats, setStats] = useState({ totalEmployees: 0, totalDepartments: 0, pendingLeaves: 0 });
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resStats = await axiosClient.get('/dashboard/stats');
        setStats(resStats.data);
        const resCharts = await axiosClient.get('/dashboard/charts');
        setCharts(resCharts.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>Dashboard Tổng Quan</h2>
      <Row gutter={16}>
        <Col span={8}>
          <Card bordered={false} style={{ background: '#e6f7ff' }}>
            <Statistic title="Tổng Nhân Viên" value={stats.totalEmployees} prefix={<TeamOutlined />} valueStyle={{ color: '#1890ff' }} />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false} style={{ background: '#f6ffed' }}>
            <Statistic title="Phòng Ban" value={stats.totalDepartments} prefix={<BankOutlined />} valueStyle={{ color: '#52c41a' }} />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false} style={{ background: '#fffbe6' }}>
            <Statistic title="Đơn Nghỉ Phép Chờ Duyệt" value={stats.pendingLeaves} prefix={<FileTextOutlined />} valueStyle={{ color: '#faad14' }} />
          </Card>
        </Col>
      </Row>

      <div style={{ marginTop: 40, height: 400 }}>
        <h3>Thống kê nhân sự theo Phòng ban</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={charts} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" name="Số lượng NV" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
