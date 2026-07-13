import { Outlet, useNavigate, useLocation } from "react-router-dom";
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
