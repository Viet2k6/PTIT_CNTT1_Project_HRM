import React, { useEffect, useState } from 'react';
import { Table, Button, Card, message, InputNumber, Space } from 'antd';
import { DollarOutlined } from '@ant-design/icons';
import axiosClient from '../api/axiosClient';

export default function Salary() {
  const [salaries, setSalaries] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  
  const user = JSON.parse(localStorage.getItem('user'));
  const isAdmin = user?.role === 'ROLE_ADMIN';

  const fetchSalaries = async () => {
    try {
      const endpoint = isAdmin ? '/salaries/all' : '/salaries/my-salaries';
      const res = await axiosClient.get(endpoint);
      setSalaries(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSalaries();
  }, []);

  const handleGenerate = async () => {
    try {
      await axiosClient.post(`/salaries/generate?month=${month}&year=${year}`);
      message.success('Chốt lương thành công!');
      fetchSalaries();
    } catch (error) {
      message.error('Lỗi khi tính lương!');
    }
  };

  const columns = [
    { title: 'Tháng', dataIndex: 'month' },
    { title: 'Năm', dataIndex: 'year' },
    isAdmin && { title: 'Nhân viên', render: (_, r) => r.employee?.fullName },
    { title: 'Lương cơ bản', dataIndex: 'baseSalary', render: val => val.toLocaleString() + ' đ' },
    { title: 'Phụ cấp', dataIndex: 'bonus', render: val => val.toLocaleString() + ' đ' },
    { title: 'Trừ muộn/nghỉ', dataIndex: 'deduction', render: val => val.toLocaleString() + ' đ' },
    { title: 'Thực lĩnh', dataIndex: 'totalSalary', render: val => <strong style={{color: '#52c41a'}}>{val.toLocaleString()} đ</strong> },
  ].filter(Boolean);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <h2>{isAdmin ? 'Quản lý Bảng Lương' : 'Phiếu Lương Của Tôi'}</h2>
        {isAdmin && (
          <Space>
            <span>Tháng:</span> <InputNumber min={1} max={12} value={month} onChange={setMonth} />
            <span>Năm:</span> <InputNumber min={2000} max={2100} value={year} onChange={setYear} />
            <Button type="primary" icon={<DollarOutlined />} onClick={handleGenerate}>Chốt Lương</Button>
          </Space>
        )}
      </div>
      <Table dataSource={salaries} columns={columns} rowKey="id" />
    </div>
  );
}
