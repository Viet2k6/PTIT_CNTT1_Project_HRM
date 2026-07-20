import React, { useEffect, useState } from 'react';
import { Typography, Row, Col, Card, Avatar, Button, Form, Input, Divider, message } from "antd";
import { UserOutlined, SaveOutlined } from "@ant-design/icons";
import axiosClient from '../api/axiosClient';

const { Title, Text } = Typography;

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [form] = Form.useForm();
  const [pwdForm] = Form.useForm();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axiosClient.get('/employees/me');
        setProfile(res.data);
        form.setFieldsValue({
          name: res.data.fullName,
          email: res.data.email,
          dept: res.data.department?.name,
          pos: res.data.position?.name
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, []);

  const handleChangePassword = async (values) => {
    try {
      await axiosClient.put('/employees/me/password', values);
      message.success('Đổi mật khẩu thành công!');
      pwdForm.resetFields();
    } catch (err) {
      message.error(err.response?.data?.error || 'Đổi mật khẩu thất bại!');
    }
  };

  if(!profile) return <div>Đang tải...</div>;

  return (
    <div>
      <Title level={2} style={{ marginTop: 0, marginBottom: 24 }}>Hồ sơ của tôi</Title>
      <Row gutter={24}>
        <Col xs={24} md={8}>
          <Card bordered={false} style={{ textAlign: 'center' }}>
            <Avatar size={120} style={{ backgroundColor: '#4F46E5', fontSize: 48, marginBottom: 16 }}>
              {profile.fullName.charAt(0).toUpperCase()}
            </Avatar>
            <Title level={4} style={{ margin: 0 }}>{profile.fullName}</Title>
            <Text type="secondary" style={{ display: 'block', marginBottom: 24 }}>{profile.email}</Text>
          </Card>
        </Col>
        <Col xs={24} md={16}>
          <Card title="Thông tin cá nhân" bordered={false}>
            <Form form={form} layout="vertical">
              <Row gutter={16}>
                <Col span={12}><Form.Item label="Họ và tên" name="name"><Input disabled/></Form.Item></Col>
                <Col span={12}><Form.Item label="Email" name="email"><Input disabled /></Form.Item></Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}><Form.Item label="Phòng ban" name="dept"><Input disabled /></Form.Item></Col>
                <Col span={12}><Form.Item label="Chức vụ" name="pos"><Input disabled /></Form.Item></Col>
              </Row>
            </Form>
            
            <Divider />
            <Title level={5} style={{ marginTop: 0 }}>Đổi mật khẩu</Title>
            <Form form={pwdForm} layout="vertical" onFinish={handleChangePassword}>
              <Form.Item label="Mật khẩu cũ" name="oldPassword" rules={[{required:true}]}><Input.Password /></Form.Item>
              <Form.Item label="Mật khẩu mới" name="newPassword" rules={[{required:true}]}><Input.Password /></Form.Item>
              <Form.Item style={{ textAlign: 'right' }}>
                <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>Lưu thay đổi</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
