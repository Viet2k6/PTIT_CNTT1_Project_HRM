import os

files = {
    'src/index.css': """@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background-color: #f0f2f5; -webkit-font-smoothing: antialiased; }

/* Ant Design Overrides to make it look premium */
.ant-layout-sider-dark .ant-menu-dark .ant-menu-item-selected { background-color: #4F46E5 !important; }
.ant-card { border-radius: 12px; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03); }
.ant-btn { border-radius: 6px; font-weight: 500; }
.ant-table-wrapper { background: white; border-radius: 12px; padding: 12px; }
""",

    'src/App.jsx': """import { Routes, Route, Navigate } from "react-router-dom";
import { ConfigProvider } from "antd";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import LeaveRequests from "./pages/LeaveRequests";
import Profile from "./pages/Profile";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#4F46E5',
          borderRadius: 6,
          fontFamily: "'Inter', sans-serif"
        },
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="leave" element={<LeaveRequests />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
""",

    'src/components/Layout.jsx': """import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Layout as AntLayout, Menu, Dropdown, Avatar } from "antd";
import { DashboardOutlined, TeamOutlined, ClockCircleOutlined, CalendarOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = AntLayout;

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: "/dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
    { key: "/employees", icon: <TeamOutlined />, label: "Nhân sự" },
    { key: "/attendance", icon: <ClockCircleOutlined />, label: "Chấm công" },
    { key: "/leave", icon: <CalendarOutlined />, label: "Nghỉ phép" },
    { key: "/profile", icon: <UserOutlined />, label: "Hồ sơ của tôi" },
  ];

  const userMenu = {
    items: [
      { key: "1", icon: <UserOutlined />, label: "Hồ sơ cá nhân", onClick: () => navigate("/profile") },
      { key: "2", icon: <LogoutOutlined />, label: "Đăng xuất", danger: true, onClick: () => navigate("/login") },
    ]
  };

  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <Sider theme="dark" width={250} breakpoint="lg" collapsedWidth="0" style={{ background: '#1e293b' }}>
        <div style={{ height: 64, margin: 16, color: "white", fontSize: 20, fontWeight: "bold", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 32, background: "#4F46E5", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>HR</div>
          HRM System
        </div>
        <Menu 
          theme="dark" 
          mode="inline" 
          selectedKeys={[location.pathname]} 
          items={menuItems} 
          onClick={({key}) => navigate(key)}
          style={{ background: '#1e293b' }}
        />
      </Sider>
      <AntLayout>
        <Header style={{ padding: "0 24px", background: "#fff", display: "flex", justifyContent: "flex-end", alignItems: "center", boxShadow: "0 1px 4px rgba(0,21,41,.08)", zIndex: 1 }}>
          <Dropdown menu={userMenu} placement="bottomRight" arrow>
            <div style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontWeight: 500 }}>
              <Avatar style={{ backgroundColor: '#4F46E5' }}>A</Avatar>
              Admin (HR)
            </div>
          </Dropdown>
        </Header>
        <Content style={{ margin: "24px", padding: 24, background: "transparent", overflowY: "auto" }}>
          <Outlet />
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default MainLayout;
""",

    'src/pages/Login.jsx': """import { Form, Input, Button, Checkbox, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    navigate("/dashboard");
  };

  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #4F46E5 0%, #3B82F6 100%)", padding: 16 }}>
      <Card style={{ width: "100%", maxWidth: 400, borderRadius: 16, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", border: 'none' }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: "#4F46E5", color: "white", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto 16px" }}>
            <UserOutlined />
          </div>
          <h1 style={{ fontSize: 24, fontWeight: "bold", margin: 0 }}>Đăng nhập</h1>
          <p style={{ color: "#6B7280", marginTop: 8 }}>Hệ thống Quản lý Nhân sự HRM</p>
        </div>

        <Form name="login" initialValues={{ remember: true }} onFinish={onFinish} size="large">
          <Form.Item name="email" rules={[{ required: true, message: 'Vui lòng nhập Email!' }]}>
            <Input prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Email (admin@hrm.com)" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập Mật khẩu!' }]}>
            <Input.Password prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Mật khẩu" />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Ghi nhớ</Checkbox>
            </Form.Item>
            <a style={{ float: 'right' }} href="">Quên mật khẩu?</a>
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button type="primary" htmlType="submit" style={{ width: '100%', height: 40 }}>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
""",

    'src/pages/Dashboard.jsx': """import { Row, Col, Card, Statistic, Table, Typography } from "antd";
import { UserOutlined, CheckCircleOutlined, ClockCircleOutlined, CalendarOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Dashboard = () => {
  const recentEmployees = [
    { key: '1', name: 'Nguyễn Văn A', department: 'IT', position: 'Developer', date: '10/07/2026' },
    { key: '2', name: 'Trần Thị B', department: 'HR', position: 'Chuyên viên', date: '08/07/2026' },
    { key: '3', name: 'Lê Văn C', department: 'Marketing', position: 'Trưởng phòng', date: '01/07/2026' },
  ];

  const columns = [
    { title: 'Họ tên', dataIndex: 'name', key: 'name' },
    { title: 'Phòng ban', dataIndex: 'department', key: 'department' },
    { title: 'Chức vụ', dataIndex: 'position', key: 'position' },
    { title: 'Ngày gia nhập', dataIndex: 'date', key: 'date' },
  ];

  return (
    <div>
      <Title level={2} style={{ marginTop: 0, marginBottom: 24 }}>Bảng điều khiển (Dashboard)</Title>
      
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={6}>
          <Card bordered={false}>
            <Statistic title="Tổng nhân sự" value={124} prefix={<UserOutlined style={{ color: '#4F46E5' }} />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card bordered={false}>
            <Statistic title="Đã Check-in" value={118} prefix={<CheckCircleOutlined style={{ color: '#52c41a' }} />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card bordered={false}>
            <Statistic title="Đi muộn" value={4} prefix={<ClockCircleOutlined style={{ color: '#faad14' }} />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card bordered={false}>
            <Statistic title="Nghỉ phép" value={2} prefix={<CalendarOutlined style={{ color: '#f5222d' }} />} />
          </Card>
        </Col>
      </Row>

      <div style={{ background: 'white', padding: 24, borderRadius: 12 }}>
        <Title level={4} style={{ marginTop: 0, marginBottom: 16 }}>Nhân viên mới gần đây</Title>
        <Table columns={columns} dataSource={recentEmployees} pagination={false} size="middle" />
      </div>
    </div>
  );
};

export default Dashboard;
""",

    'src/pages/Employees.jsx': """import { Table, Button, Space, Input, Typography, Tag, Popconfirm } from "antd";
import { PlusOutlined, SearchOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Employees = () => {
  const dataSource = [
    { key: "1", id: "NV001", name: "Trần Đăng Việt", email: "viet@hrm.com", dept: "IT", pos: "Dev" },
    { key: "2", id: "NV002", name: "Nguyễn Văn A", email: "a@hrm.com", dept: "HR", pos: "Chuyên viên" },
    { key: "3", id: "NV003", name: "Lê Thị B", email: "b@hrm.com", dept: "Kế toán", pos: "Kế toán viên" },
  ];

  const columns = [
    { title: 'Mã NV', dataIndex: 'id', key: 'id', render: text => <strong>{text}</strong> },
    { title: 'Họ và tên', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phòng ban', dataIndex: 'dept', key: 'dept', render: text => <Tag color="blue">{text}</Tag> },
    { title: 'Chức vụ', dataIndex: 'pos', key: 'pos' },
    {
      title: 'Thao tác',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="text" icon={<EditOutlined />} style={{ color: '#1890ff' }} />
          <Popconfirm title="Bạn có chắc muốn xóa nhân viên này?" okText="Có" cancelText="Không">
            <Button type="text" danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <Title level={2} style={{ margin: 0 }}>Quản lý Nhân sự</Title>
        <Button type="primary" icon={<PlusOutlined />}>Thêm nhân viên</Button>
      </div>

      <div style={{ background: 'white', padding: 24, borderRadius: 12 }}>
        <div style={{ marginBottom: 16, display: 'flex', gap: 16 }}>
          <Input placeholder="Tìm kiếm theo tên, email..." prefix={<SearchOutlined />} style={{ maxWidth: 300 }} />
          <Button>Tìm kiếm</Button>
        </div>

        <Table columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
};

export default Employees;
""",

    'src/pages/Attendance.jsx': """import { useState } from "react";
import { Button, Typography, Alert, Table, Tag } from "antd";
import { ClockCircleOutlined, LogoutOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Attendance = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const columns = [
    { title: 'Ngày', dataIndex: 'date', key: 'date' },
    { title: 'Giờ đến', dataIndex: 'in', key: 'in' },
    { title: 'Giờ về', dataIndex: 'out', key: 'out' },
    { title: 'Trạng thái', dataIndex: 'status', key: 'status', render: status => (
        <Tag color={status === 'Đúng giờ' ? 'success' : 'warning'}>{status}</Tag>
      )
    },
  ];

  const data = [
    { key: '1', date: '09/07/2026', in: '07:55 AM', out: '17:05 PM', status: 'Đúng giờ' },
    { key: '2', date: '08/07/2026', in: '08:10 AM', out: '17:00 PM', status: 'Đi muộn' },
  ];

  return (
    <div>
      <Title level={2} style={{ marginTop: 0, marginBottom: 24 }}>Chấm công</Title>

      <div style={{ textAlign: "center", padding: "48px 24px", background: "#fff", borderRadius: 16, marginBottom: 32, border: "1px dashed #cbd5e1" }}>
        <Title level={1} style={{ margin: 0, color: "#4F46E5", fontSize: 48 }}>08:15 AM</Title>
        <Text type="secondary" style={{ display: "block", marginBottom: 32, fontSize: 16 }}>Thứ Hai, 10 Tháng 7, 2026</Text>

        {!isCheckedIn ? (
          <Button type="primary" size="large" icon={<ClockCircleOutlined />} onClick={() => setIsCheckedIn(true)} style={{ height: 48, padding: "0 32px", fontSize: 16, borderRadius: 24 }}>
            Check-in ngay
          </Button>
        ) : (
          <Button danger type="primary" size="large" icon={<LogoutOutlined />} onClick={() => setIsCheckedIn(false)} style={{ height: 48, padding: "0 32px", fontSize: 16, borderRadius: 24 }}>
            Check-out về
          </Button>
        )}

        {isCheckedIn && (
          <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
            <Alert message="Bạn đã check-in thành công lúc 08:15 AM. Chúc bạn một ngày làm việc hiệu quả!" type="success" showIcon />
          </div>
        )}
      </div>

      <div style={{ background: 'white', padding: 24, borderRadius: 12 }}>
        <Title level={4} style={{ marginTop: 0, marginBottom: 16 }}>Lịch sử chấm công gần đây</Title>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  );
};

export default Attendance;
""",

    'src/pages/LeaveRequests.jsx': """import { Button, Typography, Table, Tag, Row, Col, Card, Statistic, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;

const LeaveRequests = () => {
  const columns = [
    { title: 'Ngày tạo', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Từ ngày', dataIndex: 'start', key: 'start' },
    { title: 'Đến ngày', dataIndex: 'end', key: 'end' },
    { title: 'Lý do', dataIndex: 'reason', key: 'reason' },
    { title: 'Trạng thái', dataIndex: 'status', key: 'status', render: status => (
        <Tag color={status === 'PENDING' ? 'processing' : status === 'APPROVED' ? 'success' : 'error'}>{status}</Tag>
      )
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (_, record) => (
        record.status === 'PENDING' ? (
          <Space>
            <Button size="small" type="primary" style={{ background: '#52c41a' }}>Duyệt</Button>
            <Button size="small" danger>Từ chối</Button>
          </Space>
        ) : '-'
      ),
    },
  ];

  const data = [
    { key: '1', createdAt: '10/07/2026', start: '15/07/2026', end: '16/07/2026', reason: 'Việc gia đình', status: 'PENDING' },
    { key: '2', createdAt: '01/07/2026', start: '02/07/2026', end: '02/07/2026', reason: 'Bị ốm', status: 'APPROVED' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <Title level={2} style={{ margin: 0 }}>Quản lý Nghỉ phép</Title>
        <Button type="primary" icon={<PlusOutlined />}>Tạo đơn mới</Button>
      </div>

      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic title="Quỹ phép năm" value={12} suffix="ngày" />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic title="Đã sử dụng" value={2} suffix="ngày" valueStyle={{ color: '#cf1322' }} />
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>
            <Statistic title="Còn lại" value={10} suffix="ngày" valueStyle={{ color: '#3f8600' }} />
          </Card>
        </Col>
      </Row>

      <div style={{ background: 'white', padding: 24, borderRadius: 12 }}>
        <Title level={4} style={{ marginTop: 0, marginBottom: 16 }}>Danh sách đơn xin nghỉ</Title>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default LeaveRequests;
""",

    'src/pages/Profile.jsx': """import { Typography, Row, Col, Card, Avatar, Button, Form, Input, Divider } from "antd";
import { UserOutlined, UploadOutlined, SaveOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Profile = () => {
  return (
    <div>
      <Title level={2} style={{ marginTop: 0, marginBottom: 24 }}>Hồ sơ của tôi</Title>

      <Row gutter={24}>
        <Col xs={24} md={8}>
          <Card bordered={false} style={{ textAlign: 'center' }}>
            <Avatar size={120} style={{ backgroundColor: '#4F46E5', fontSize: 48, marginBottom: 16 }}>A</Avatar>
            <Title level={4} style={{ margin: 0 }}>Admin (HR)</Title>
            <Text type="secondary" style={{ display: 'block', marginBottom: 24 }}>admin@hrm.com</Text>
            <Button icon={<UploadOutlined />} block>Thay đổi Avatar</Button>
          </Card>
        </Col>

        <Col xs={24} md={16}>
          <Card title="Thông tin cá nhân" bordered={false}>
            <Form layout="vertical" initialValues={{ name: "Admin (HR)", email: "admin@hrm.com", dept: "Nhân sự", pos: "Trưởng phòng" }}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Họ và tên" name="name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Email" name="email">
                    <Input disabled />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Phòng ban" name="dept">
                    <Input disabled />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Chức vụ" name="pos">
                    <Input disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Divider />
              <Title level={5} style={{ marginTop: 0 }}>Đổi mật khẩu</Title>
              
              <Form.Item label="Mật khẩu cũ">
                <Input.Password />
              </Form.Item>
              <Form.Item label="Mật khẩu mới">
                <Input.Password />
              </Form.Item>

              <Form.Item style={{ marginBottom: 0, textAlign: 'right' }}>
                <Button type="primary" icon={<SaveOutlined />}>Lưu thay đổi</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
"""
}

import os
for path, content in files.items():
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print('Successfully rewritten all React components with Ant Design!')
