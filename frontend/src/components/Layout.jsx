import React from 'react';
import { Layout as AntLayout, Menu, Dropdown, Avatar } from 'antd';
import { 
  DashboardOutlined, 
  TeamOutlined, 
  CalendarOutlined, 
  ClockCircleOutlined,
  UserOutlined,
  LogoutOutlined,
  DollarOutlined
} from '@ant-design/icons';
import { Outlet, useNavigate, useLocation, Navigate } from 'react-router-dom';

const { Header, Sider, Content } = AntLayout;

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user')) || { fullName: 'Người dùng', role: 'ROLE_EMPLOYEE' };

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  // PHÂN QUYỀN (RBAC): Chỉ Admin mới thấy Quản lý nhân viên
  const menuItems = [
    { key: '/dashboard', icon: <DashboardOutlined />, label: 'Dashboard' },
    user.role === 'ROLE_ADMIN' ? { key: '/employees', icon: <TeamOutlined />, label: 'Quản lý nhân sự' } : null,
    { key: '/attendance', icon: <ClockCircleOutlined />, label: 'Chấm công' },
    { key: '/leave', icon: <CalendarOutlined />, label: 'Nghỉ phép' },
    { key: '/salary', icon: <DollarOutlined />, label: 'Bảng lương' },
  ].filter(Boolean); // Lọc bỏ các giá trị null

  const profileMenu = {
    items: [
      { key: 'profile', icon: <UserOutlined />, label: 'Hồ sơ', onClick: () => navigate('/profile') },
      { key: 'logout', icon: <LogoutOutlined />, label: 'Đăng xuất', onClick: handleLogout },
    ]
  };

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Sider theme="dark" style={{ borderRight: '1px solid #001529' }}>
        <div style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #001529', background: '#002140' }}>
          <h2 style={{ margin: 0, color: '#fff' }}>HRM SYSTEM</h2>
        </div>
        <Menu 
          theme="dark"
          mode="inline" 
          selectedKeys={[location.pathname]} 
          items={menuItems} 
          onClick={({key}) => navigate(key)}
          style={{ borderRight: 0 }}
        />
      </Sider>
      <AntLayout>
        <Header style={{ background: '#001529', padding: '0 24px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', borderBottom: '1px solid #001529' }}>
          <Dropdown menu={profileMenu} placement="bottomRight">
            <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, color: '#fff' }}>
              <Avatar icon={<UserOutlined />} />
              <span>{user.fullName} ({user.role === 'ROLE_ADMIN' ? 'Admin' : 'NV'})</span>
            </div>
          </Dropdown>
        </Header>
        <Content style={{ margin: '24px', background: '#fff', padding: 24, borderRadius: 8, minHeight: 280 }}>
          <Outlet />
        </Content>
      </AntLayout>
    </AntLayout>
  );
}
