import React, { useEffect, useState } from 'react';
import { Table, Button, Space, Modal, Form, Input, Select, message, Tag } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, DownloadOutlined } from '@ant-design/icons';
import axiosClient from '../api/axiosClient';
import { Navigate } from 'react-router-dom';

const { Option } = Select;

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [positions, setPositions] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form] = Form.useForm();
  
  const user = JSON.parse(localStorage.getItem('user'));
  if(user?.role !== 'ROLE_ADMIN') {
      return <Navigate to="/dashboard" replace />;
  }

  const fetchData = async () => {
    try {
      const [empRes, deptRes, posRes] = await Promise.all([
        axiosClient.get('/employees'),
        axiosClient.get('/departments'),
        axiosClient.get('/positions')
      ]);
      setEmployees(empRes.data);
      setDepartments(deptRes.data);
      setPositions(posRes.data);
    } catch (error) {
      message.error('Lỗi khi tải dữ liệu');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showModal = (record) => {
    setEditingId(record ? record.id : null);
    if (record) {
      form.setFieldsValue({
        fullName: record.fullName,
        email: record.email,
        department: record.department?.id,
        position: record.position?.id,
        role: record.role,
        status: record.status,
      });
    } else {
      form.resetFields();
    }
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const payload = {
        ...values,
        department: { id: values.department },
        position: { id: values.position }
      };
      
      if (editingId) {
        await axiosClient.put(`/employees/${editingId}`, payload);
        message.success('Cập nhật nhân viên thành công!');
      } else {
        await axiosClient.post('/employees', payload);
        message.success('Thêm nhân viên thành công!');
      }
      setIsModalVisible(false);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosClient.delete(`/employees/${id}`);
      message.success('Đã vô hiệu hóa nhân viên!');
      fetchData();
    } catch (error) {
      message.error('Lỗi khi xóa!');
    }
  };

  const handleExportCSV = () => {
    if (employees.length === 0) return message.warning('Không có dữ liệu để xuất');
    const header = ['ID', 'Ho va ten', 'Email', 'Phong ban', 'Chuc vu', 'Trang thai'];
    const rows = employees.map(emp => [
      emp.id, 
      emp.fullName, 
      emp.email, 
      emp.department?.name || '', 
      emp.position?.name || '', 
      emp.status
    ]);
    const csvContent = [header.join(','), ...rows.map(r => r.join(','))].join('\\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'DanhSachNhanVien.csv';
    link.click();
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Họ và tên', dataIndex: 'fullName', key: 'fullName' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phòng ban', key: 'department', render: (text, record) => record.department?.name },
    { title: 'Chức vụ', key: 'position', render: (text, record) => record.position?.name },
    { 
      title: 'Trạng thái', 
      key: 'status', 
      render: (text, record) => (
        <Tag color={record.status === 'ACTIVE' ? 'green' : 'red'}>{record.status}</Tag>
      ) 
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" icon={<EditOutlined />} onClick={() => showModal(record)} />
          <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} />
        </Space>
      ),
    },
  ];

  const filteredEmployees = employees.filter(emp => 
    emp.fullName.toLowerCase().includes(searchText.toLowerCase()) || 
    emp.email.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <h2>Quản lý Nhân sự</h2>
        <Space>
          <Input.Search 
            placeholder="Tìm kiếm tên hoặc email..." 
            onChange={(e) => setSearchText(e.target.value)} 
            style={{ width: 250 }}
            allowClear
          />
          <Button icon={<DownloadOutlined />} onClick={handleExportCSV}>Xuất Excel (CSV)</Button>
          <Button type="primary" icon={<PlusOutlined />} onClick={() => showModal(null)}>Thêm Nhân viên</Button>
        </Space>
      </div>
      <Table dataSource={filteredEmployees} columns={columns} rowKey="id" />

      <Modal title={editingId ? 'Sửa Nhân viên' : 'Thêm Nhân viên'} open={isModalVisible} onOk={handleOk} onCancel={() => setIsModalVisible(false)}>
        <Form form={form} layout="vertical">
          <Form.Item name="fullName" label="Họ và tên" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}><Input /></Form.Item>
          <Form.Item name="password" label="Mật khẩu" tooltip="Bỏ trống nếu không muốn đổi pass"><Input.Password /></Form.Item>
          
          <Form.Item name="department" label="Phòng ban" rules={[{ required: true }]}>
            <Select>
              {departments.map(d => <Option key={d.id} value={d.id}>{d.name}</Option>)}
            </Select>
          </Form.Item>
          
          <Form.Item name="position" label="Chức vụ" rules={[{ required: true }]}>
            <Select>
              {positions.map(p => <Option key={p.id} value={p.id}>{p.name}</Option>)}
            </Select>
          </Form.Item>
          
          <Form.Item name="role" label="Phân quyền (Role)" rules={[{ required: true }]}>
            <Select>
              <Option value="ROLE_ADMIN">Admin (Quản trị)</Option>
              <Option value="ROLE_EMPLOYEE">Employee (Nhân viên)</Option>
            </Select>
          </Form.Item>

          <Form.Item name="status" label="Trạng thái" rules={[{ required: true }]}>
            <Select>
              <Option value="ACTIVE">Đang hoạt động</Option>
              <Option value="INACTIVE">Vô hiệu hóa</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
