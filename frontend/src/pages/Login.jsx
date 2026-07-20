import React from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../api/axiosClient';

const { Title, Text } = Typography;

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axiosClient.post('/auth/login', {
        email: values.email,
        password: values.password
      });
      const data = response.data;
      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('user', JSON.stringify({ fullName: data.fullName, role: data.role }));
      message.success('Đăng nhập thành công!');
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      message.error(error.response?.data?.error || error.response?.data?.message || 'Tài khoản hoặc mật khẩu không chính xác!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundImage: 'url("/login-bg.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      {/* Overlay gradient */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(20,20,50,0.8) 100%)'
      }}></div>

      {/* Content wrapper */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '16px',
          padding: '40px 32px',
          width: '100%',
          maxWidth: '420px',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{
              width: 60, height: 60, 
              background: 'linear-gradient(45deg, #4F46E5, #06b6d4)',
              borderRadius: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
              boxShadow: '0 4px 12px rgba(79, 70, 229, 0.4)'
            }}>
              <span style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>HR</span>
            </div>
            <Title level={3} style={{ color: '#fff', margin: 0, fontWeight: 600 }}>Xin chào!</Title>
            <Text style={{ color: 'rgba(255,255,255,0.7)' }}>Đăng nhập vào Hệ thống Quản trị Nhân sự</Text>
          </div>

          <Form name="login" onFinish={onFinish} layout="vertical" size="large">
            <Form.Item 
              name="email" 
              rules={[{ required: true, message: 'Vui lòng nhập Email!' }, { type: 'email', message: 'Email không hợp lệ!' }]}
            >
              <Input 
                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,0.45)' }}/>} 
                placeholder="Email của bạn" 
                style={{ borderRadius: 8 }}
              />
            </Form.Item>
            <Form.Item 
              name="password" 
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
              <Input.Password 
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,0.45)' }}/>} 
                placeholder="Mật khẩu" 
                style={{ borderRadius: 8 }}
              />
            </Form.Item>
            
            <Form.Item style={{ marginTop: 8 }}>
              <Button 
                type="primary" 
                htmlType="submit" 
                block 
                loading={loading}
                style={{
                  height: 44,
                  borderRadius: 8,
                  background: 'linear-gradient(45deg, #4F46E5, #3b82f6)',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: 16,
                  boxShadow: '0 4px 14px 0 rgba(79, 70, 229, 0.39)'
                }}
              >
                Đăng Nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
