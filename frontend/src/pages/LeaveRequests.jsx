import React, { useEffect, useState } from 'react';
import { Table, Button, Space, Modal, Form, Input, DatePicker, message, Tag } from 'antd';
import { PlusOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import axiosClient from '../api/axiosClient';
import dayjs from 'dayjs';

export default function LeaveRequests() {
  const [requests, setRequests] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  
  const user = JSON.parse(localStorage.getItem('user'));
  const isAdmin = user?.role === 'ROLE_ADMIN';

  const fetchRequests = async () => {
    try {
      const endpoint = isAdmin ? '/leaves/all' : '/leaves/my-requests';
      const res = await axiosClient.get(endpoint);
      setRequests(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleApply = async () => {
    try {
      const values = await form.validateFields();
      await axiosClient.post('/leaves/apply', {
        startDate: values.dates[0].format('YYYY-MM-DD'),
        endDate: values.dates[1].format('YYYY-MM-DD'),
        reason: values.reason
      });
      message.success('Đã gửi đơn xin nghỉ phép!');
      setIsModalVisible(false);
      form.resetFields();
      fetchRequests();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAction = async (id, action) => {
    try {
      await axiosClient.put(`/leaves/${id}/${action}`);
      message.success(`Đã ${action === 'approve' ? 'Duyệt' : 'Từ chối'} đơn!`);
      fetchRequests();
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { title: 'ID', dataIndex: 'id' },
    isAdmin && { title: 'Nhân viên', render: (_, r) => r.employee?.fullName },
    { title: 'Từ ngày', dataIndex: 'startDate' },
    { title: 'Đến ngày', dataIndex: 'endDate' },
    { title: 'Lý do', dataIndex: 'reason' },
    { 
      title: 'Trạng thái', 
      dataIndex: 'status',
      render: (val) => {
        let color = val === 'APPROVED' ? 'green' : val === 'REJECTED' ? 'red' : 'gold';
        return <Tag color={color}>{val}</Tag>;
      }
    },
    isAdmin && {
      title: 'Hành động',
      render: (_, r) => r.status === 'PENDING' && (
        <Space>
          <Button type="primary" icon={<CheckOutlined />} onClick={() => handleAction(r.id, 'approve')} />
          <Button danger icon={<CloseOutlined />} onClick={() => handleAction(r.id, 'reject')} />
        </Space>
      )
    }
  ].filter(Boolean);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <h2>Quản lý Nghỉ phép</h2>
        {!isAdmin && <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalVisible(true)}>Tạo Đơn Mới</Button>}
      </div>

      <Table dataSource={requests} columns={columns} rowKey="id" />

      <Modal title="Tạo Đơn Nghỉ Phép" open={isModalVisible} onOk={handleApply} onCancel={() => setIsModalVisible(false)}>
        <Form form={form} layout="vertical">
          <Form.Item name="dates" label="Thời gian nghỉ" rules={[{ required: true }]}>
            <DatePicker.RangePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="reason" label="Lý do" rules={[{ required: true }]}>
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
