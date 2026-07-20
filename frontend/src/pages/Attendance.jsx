import React, { useEffect, useState } from 'react';
import { Table, Button, Card, Row, Col, Typography, message, Tag } from 'antd';
import { ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import axiosClient from '../api/axiosClient';

const { Title, Text } = Typography;

export default function Attendance() {
  const [logs, setLogs] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const isAdmin = user?.role === 'ROLE_ADMIN';

  const fetchLogs = async () => {
    try {
      const endpoint = isAdmin ? '/attendance/all' : '/attendance/my-logs';
      const res = await axiosClient.get(endpoint);
      setLogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleCheckIn = () => {
    if (!navigator.geolocation) {
      return message.error('Trình duyệt không hỗ trợ GPS!');
    }
    
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          await axiosClient.post(`/attendance/check-in?lat=${latitude}&lng=${longitude}`);
          message.success('Check-in thành công!');
          fetchLogs();
        } catch (error) {
          message.error(error.response?.data?.error || error.response?.data?.message || 'Lỗi Check-in!');
        }
      },
      (error) => {
        message.error('Vui lòng cho phép truy cập vị trí để chấm công!');
      }
    );
  };

  const handleCheckOut = async () => {
    try {
      await axiosClient.post('/attendance/check-out');
      message.success('Check-out thành công!');
      fetchLogs();
    } catch (error) {
      message.error(error.response?.data?.message || 'Lỗi Check-out!');
    }
  };

  const columns = [
    { title: 'ID', dataIndex: 'id' },
    isAdmin && { title: 'Nhân viên', render: (_, record) => record.employee?.fullName },
    { title: 'Ngày làm việc', dataIndex: 'workDate' },
    { title: 'Giờ vào', dataIndex: 'checkInTime', render: (val) => val ? new Date(val).toLocaleTimeString() : '--:--' },
    { title: 'Giờ ra', dataIndex: 'checkOutTime', render: (val) => val ? new Date(val).toLocaleTimeString() : '--:--' },
    { 
      title: 'Trạng thái', 
      dataIndex: 'status',
      render: (val) => (
        <Tag color={val === 'LATE' ? 'red' : 'green'}>{val}</Tag>
      )
    },
  ].filter(Boolean);

  return (
    <div>
      <Title level={2}>Quản lý Chấm công</Title>
      {!isAdmin && (
        <Row gutter={16} style={{ marginBottom: 24 }}>
          <Col span={12}>
            <Card style={{ textAlign: 'center' }}>
              <ClockCircleOutlined style={{ fontSize: 40, color: '#1890ff', marginBottom: 16 }} />
              <Title level={4}>Giờ vào ca</Title>
              <Text type="secondary" style={{ display: 'block', marginBottom: 16 }}>08:00 AM</Text>
              <Button type="primary" size="large" onClick={handleCheckIn}>Check In</Button>
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{ textAlign: 'center' }}>
              <CheckCircleOutlined style={{ fontSize: 40, color: '#52c41a', marginBottom: 16 }} />
              <Title level={4}>Giờ tan ca</Title>
              <Text type="secondary" style={{ display: 'block', marginBottom: 16 }}>05:00 PM</Text>
              <Button type="default" size="large" onClick={handleCheckOut}>Check Out</Button>
            </Card>
          </Col>
        </Row>
      )}

      <Card title={isAdmin ? "Lịch sử chấm công toàn công ty" : "Lịch sử chấm công của tôi"}>
        <Table dataSource={logs} columns={columns} rowKey="id" />
      </Card>
    </div>
  );
}
