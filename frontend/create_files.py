import os

files = {
    'src/index.css': """@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  --primary: #4F46E5;
  --primary-hover: #4338CA;
  --secondary: #10B981;
  --background: #F3F4F6;
  --surface: #FFFFFF;
  --text-main: #1F2937;
  --text-muted: #6B7280;
  --sidebar-bg: #1E293B;
  --sidebar-text: #E2E8F0;
  --sidebar-hover: #334155;
  --border: #E5E7EB;
  --danger: #EF4444;
  --warning: #F59E0B;
  
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Inter', sans-serif; background-color: var(--background); color: var(--text-main); -webkit-font-smoothing: antialiased; }

/* Utilities */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }
.gap-2 { gap: 0.5rem; }
.gap-4 { gap: 1rem; }
.gap-6 { gap: 1.5rem; }
.w-full { width: 100%; }
.h-screen { height: 100vh; }
.h-full { height: 100%; }

/* Buttons */
.btn { padding: 0.625rem 1.25rem; border-radius: var(--radius-md); font-weight: 500; cursor: pointer; border: none; transition: all 0.2s ease; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.875rem;}
.btn-primary { background-color: var(--primary); color: white; }
.btn-primary:hover { background-color: var(--primary-hover); transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn-secondary { background-color: white; color: var(--text-main); border: 1px solid var(--border); }
.btn-secondary:hover { background-color: #F9FAFB; }
.btn-danger { background-color: var(--danger); color: white; }
.btn-danger:hover { filter: brightness(0.9); }
.btn-success { background-color: var(--secondary); color: white; }
.btn-success:hover { filter: brightness(0.9); }

/* Inputs */
.input-group { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.25rem; }
.input-group label { font-size: 0.875rem; font-weight: 500; color: var(--text-main); }
.input { padding: 0.75rem 1rem; border: 1px solid var(--border); border-radius: var(--radius-md); font-size: 0.875rem; outline: none; transition: border-color 0.2s ease, box-shadow 0.2s ease; width: 100%;}
.input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }

/* Cards */
.card { background-color: var(--surface); border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: 1.5rem; transition: transform 0.3s ease, box-shadow 0.3s ease; }
.card:hover { box-shadow: var(--shadow-lg); }

/* Tables */
.table-container { background: var(--surface); border-radius: var(--radius-lg); box-shadow: var(--shadow-md); overflow: hidden; width: 100%; overflow-x: auto;}
table { width: 100%; border-collapse: collapse; min-width: 600px;}
th { background-color: #F9FAFB; text-align: left; padding: 1rem 1.5rem; font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); border-bottom: 1px solid var(--border); font-weight: 600;}
td { padding: 1rem 1.5rem; font-size: 0.875rem; border-bottom: 1px solid var(--border); color: var(--text-main); }
tr:last-child td { border-bottom: none; }
tr:hover td { background-color: #F9FAFB; }

/* Status Badges */
.badge { padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; display: inline-block;}
.badge-pending { background-color: #FEF3C7; color: #92400E; }
.badge-approved { background-color: #D1FAE5; color: #065F46; }
.badge-rejected { background-color: #FEE2E2; color: #991B1B; }

/* Layout Specific */
.layout { display: flex; height: 100vh; overflow: hidden; }
.sidebar { width: 260px; background-color: var(--sidebar-bg); color: white; display: flex; flex-direction: column; transition: all 0.3s ease; }
.sidebar-header { padding: 1.5rem; font-size: 1.5rem; font-weight: 700; color: white; display: flex; align-items: center; gap: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.1); }
.nav-item { padding: 1rem 1.5rem; display: flex; align-items: center; gap: 0.75rem; color: var(--sidebar-text); text-decoration: none; transition: all 0.2s ease; font-weight: 500; }
.nav-item:hover, .nav-item.active { background-color: var(--sidebar-hover); color: white; border-left: 4px solid var(--primary); padding-left: calc(1.5rem - 4px); }
.main-content { flex: 1; display: flex; flex-direction: column; overflow: hidden; background-color: var(--background); }
.topbar { height: 64px; background: white; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: flex-end; padding: 0 2rem; box-shadow: var(--shadow-sm); }
.user-profile { display: flex; align-items: center; gap: 0.75rem; font-weight: 500; cursor: pointer; }
.avatar { width: 36px; height: 36px; border-radius: 50%; background: var(--primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; }
.content-area { padding: 2rem; overflow-y: auto; flex: 1; }

.page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
.page-title { font-size: 1.75rem; font-weight: 700; color: var(--text-main); }

/* Dashboard Grids */
.stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
.stat-card { display: flex; align-items: center; gap: 1.5rem; }
.stat-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background-color: rgba(79, 70, 229, 0.1); color: var(--primary); }
.stat-info h4 { font-size: 0.875rem; color: var(--text-muted); font-weight: 500; margin-bottom: 0.25rem;}
.stat-info p { font-size: 1.5rem; font-weight: 700; color: var(--text-main); }

/* Login Page */
.login-container { height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #4F46E5 0%, #3B82F6 100%); padding: 1rem; }
.login-card { background: white; padding: 3rem; border-radius: 1.5rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); width: 100%; max-width: 400px; text-align: center; }
.login-logo { width: 64px; height: 64px; background: var(--primary); color: white; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; }
.login-title { font-size: 1.875rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-main); }
.login-subtitle { color: var(--text-muted); margin-bottom: 2rem; }
""",
    
    'src/main.jsx': """import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
""",

    'src/App.jsx': """import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import LeaveRequests from "./pages/LeaveRequests";
import Profile from "./pages/Profile";

function App() {
  return (
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
  );
}

export default App;
""",

    'src/components/Layout.jsx': """import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, Clock, CalendarHeart, UserCircle, LogOut } from "lucide-react";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="avatar" style={{width: 32, height: 32, fontSize: 14}}>HR</div>
          HRM System
        </div>
        <nav className="flex-col" style={{ marginTop: "1rem", flex: 1 }}>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <LayoutDashboard size={20} /> Dashboard
          </NavLink>
          <NavLink to="/employees" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Users size={20} /> Nhân sự
          </NavLink>
          <NavLink to="/attendance" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Clock size={20} /> Chấm công
          </NavLink>
          <NavLink to="/leave" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <CalendarHeart size={20} /> Nghỉ phép
          </NavLink>
          <NavLink to="/profile" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <UserCircle size={20} /> Hồ sơ của tôi
          </NavLink>
        </nav>
        <div style={{ padding: "1.5rem" }}>
          <button className="btn btn-secondary w-full" onClick={handleLogout} style={{ background: "transparent", color: "#F87171", border: "1px solid rgba(248, 113, 113, 0.3)" }}>
            <LogOut size={20} /> Đăng xuất
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <div className="user-profile" onClick={() => navigate("/profile")}>
            <div className="avatar">A</div>
            <span>Admin (HR)</span>
          </div>
        </header>
        <div className="content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
""",

    'src/pages/Login.jsx': """import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">
          <LogIn size={32} />
        </div>
        <h1 className="login-title">Đăng nhập</h1>
        <p className="login-subtitle">Hệ thống Quản lý Nhân sự HRM</p>
        
        <form onSubmit={handleLogin} style={{ textAlign: "left" }}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              className="input" 
              placeholder="admin@hrm.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <label>Mật khẩu</label>
            <input 
              type="password" 
              className="input" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <input type="checkbox" /> Ghi nhớ
            </label>
            <a href="#" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 500 }}>Quên mật khẩu?</a>
          </div>

          <button type="submit" className="btn btn-primary w-full" style={{ padding: "0.875rem", fontSize: "1rem" }}>
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
""",

    'src/pages/Dashboard.jsx': """import { Users, UserCheck, Clock, CalendarX } from "lucide-react";

const Dashboard = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Bảng điều khiển (Dashboard)</h1>
      </div>

      <div className="stats-grid">
        <div className="card stat-card">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-info">
            <h4>Tổng nhân sự</h4>
            <p>124</p>
          </div>
        </div>
        <div className="card stat-card">
          <div className="stat-icon" style={{ backgroundColor: "rgba(16, 185, 129, 0.1)", color: "#10B981" }}>
            <UserCheck size={24} />
          </div>
          <div className="stat-info">
            <h4>Đã Check-in</h4>
            <p>118</p>
          </div>
        </div>
        <div className="card stat-card">
          <div className="stat-icon" style={{ backgroundColor: "rgba(245, 158, 11, 0.1)", color: "#F59E0B" }}>
            <Clock size={24} />
          </div>
          <div className="stat-info">
            <h4>Đi muộn</h4>
            <p>4</p>
          </div>
        </div>
        <div className="card stat-card">
          <div className="stat-icon" style={{ backgroundColor: "rgba(239, 68, 68, 0.1)", color: "#EF4444" }}>
            <CalendarX size={24} />
          </div>
          <div className="stat-info">
            <h4>Nghỉ phép</h4>
            <p>2</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: "1rem", color: "var(--text-main)" }}>Nhân viên mới gần đây</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Họ tên</th>
                <th>Phòng ban</th>
                <th>Chức vụ</th>
                <th>Ngày gia nhập</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nguyễn Văn A</td>
                <td>IT</td>
                <td>Developer</td>
                <td>10/07/2026</td>
              </tr>
              <tr>
                <td>Trần Thị B</td>
                <td>HR</td>
                <td>Chuyên viên</td>
                <td>08/07/2026</td>
              </tr>
              <tr>
                <td>Lê Văn C</td>
                <td>Marketing</td>
                <td>Trưởng phòng</td>
                <td>01/07/2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
""",

    'src/pages/Employees.jsx': """import { Plus, Search, Edit, Trash2 } from "lucide-react";

const Employees = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Quản lý Nhân sự</h1>
        <button className="btn btn-primary"><Plus size={18} /> Thêm nhân viên</button>
      </div>

      <div className="card">
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
          <div className="input-group" style={{ margin: 0, flex: 1 }}>
            <input type="text" className="input" placeholder="Tìm kiếm theo tên, email..." />
          </div>
          <button className="btn btn-secondary"><Search size={18} /> Tìm kiếm</button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Mã NV</th>
                <th>Họ và tên</th>
                <th>Email</th>
                <th>Phòng ban</th>
                <th>Chức vụ</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "NV001", name: "Trần Đăng Việt", email: "viet@hrm.com", dept: "IT", pos: "Dev" },
                { id: "NV002", name: "Nguyễn Văn A", email: "a@hrm.com", dept: "HR", pos: "Chuyên viên" },
                { id: "NV003", name: "Lê Thị B", email: "b@hrm.com", dept: "Kế toán", pos: "Kế toán viên" },
              ].map(emp => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.dept}</td>
                  <td>{emp.pos}</td>
                  <td>
                    <div className="flex gap-2">
                      <button className="btn btn-secondary" style={{ padding: "0.25rem 0.5rem" }}><Edit size={16} /></button>
                      <button className="btn btn-danger" style={{ padding: "0.25rem 0.5rem" }}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employees;
""",

    'src/pages/Attendance.jsx': """import { useState } from "react";
import { Clock, LogOut } from "lucide-react";

const Attendance = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Chấm công (Check-in/out)</h1>
      </div>

      <div className="card" style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center", padding: "3rem 2rem" }}>
        <h2 style={{ fontSize: "3rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.5rem" }}>
          08:15 AM
        </h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Thứ Hai, 10 Tháng 7, 2026</p>

        <div className="flex justify-center gap-4">
          {!isCheckedIn ? (
            <button className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.125rem" }} onClick={() => setIsCheckedIn(true)}>
              <Clock size={24} /> Check-in ngay
            </button>
          ) : (
            <button className="btn btn-danger" style={{ padding: "1rem 2rem", fontSize: "1.125rem" }} onClick={() => setIsCheckedIn(false)}>
              <LogOut size={24} /> Check-out về
            </button>
          )}
        </div>

        {isCheckedIn && (
          <div style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "rgba(16, 185, 129, 0.1)", color: "#065F46", borderRadius: "var(--radius-md)" }}>
            Bạn đã check-in thành công lúc 08:15 AM. Chúc bạn một ngày làm việc hiệu quả!
          </div>
        )}
      </div>

      <div className="card" style={{ marginTop: "2rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "var(--text-main)" }}>Lịch sử chấm công gần đây</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Ngày</th>
                <th>Giờ đến</th>
                <th>Giờ về</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>09/07/2026</td>
                <td>07:55 AM</td>
                <td>17:05 PM</td>
                <td><span className="badge badge-approved">Đúng giờ</span></td>
              </tr>
              <tr>
                <td>08/07/2026</td>
                <td>08:10 AM</td>
                <td>17:00 PM</td>
                <td><span className="badge badge-pending">Đi muộn</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
""",

    'src/pages/LeaveRequests.jsx': """import { CalendarHeart } from "lucide-react";

const LeaveRequests = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Quản lý Nghỉ phép</h1>
        <button className="btn btn-primary"><CalendarHeart size={18} /> Tạo đơn mới</button>
      </div>

      <div className="stats-grid">
        <div className="card stat-card">
          <div className="stat-info">
            <h4>Quỹ phép năm</h4>
            <p>12 ngày</p>
          </div>
        </div>
        <div className="card stat-card">
          <div className="stat-info">
            <h4>Đã sử dụng</h4>
            <p>2 ngày</p>
          </div>
        </div>
        <div className="card stat-card">
          <div className="stat-info">
            <h4>Còn lại</h4>
            <p>10 ngày</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: "1rem", color: "var(--text-main)" }}>Danh sách đơn xin nghỉ</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Ngày tạo</th>
                <th>Từ ngày</th>
                <th>Đến ngày</th>
                <th>Lý do</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10/07/2026</td>
                <td>15/07/2026</td>
                <td>16/07/2026</td>
                <td>Việc gia đình</td>
                <td><span className="badge badge-pending">PENDING</span></td>
                <td>
                  <div className="flex gap-2">
                    <button className="btn btn-success" style={{ padding: "0.25rem 0.5rem" }}>Duyệt</button>
                    <button className="btn btn-danger" style={{ padding: "0.25rem 0.5rem" }}>Từ chối</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>01/07/2026</td>
                <td>02/07/2026</td>
                <td>02/07/2026</td>
                <td>Bị ốm</td>
                <td><span className="badge badge-approved">APPROVED</span></td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequests;
""",

    'src/pages/Profile.jsx': """import { UserCircle, Save } from "lucide-react";

const Profile = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Hồ sơ của tôi</h1>
      </div>

      <div className="flex gap-6">
        <div className="card" style={{ flex: 1, height: "fit-content", textAlign: "center" }}>
          <div className="avatar" style={{ width: 120, height: 120, margin: "0 auto 1.5rem", fontSize: "3rem" }}>A</div>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem", color: "var(--text-main)" }}>Admin (HR)</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>admin@hrm.com</p>
          <button className="btn btn-secondary w-full">Thay đổi Avatar</button>
        </div>

        <div className="card" style={{ flex: 2 }}>
          <h3 style={{ marginBottom: "1.5rem", color: "var(--text-main)" }}>Thông tin cá nhân</h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div className="input-group">
              <label>Họ và tên</label>
              <input type="text" className="input" defaultValue="Admin (HR)" />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" className="input" defaultValue="admin@hrm.com" disabled style={{ backgroundColor: "#F9FAFB" }} />
            </div>
            <div className="input-group">
              <label>Phòng ban</label>
              <input type="text" className="input" defaultValue="Nhân sự" disabled style={{ backgroundColor: "#F9FAFB" }} />
            </div>
            <div className="input-group">
              <label>Chức vụ</label>
              <input type="text" className="input" defaultValue="Trưởng phòng" disabled style={{ backgroundColor: "#F9FAFB" }} />
            </div>
          </div>

          <h3 style={{ margin: "2rem 0 1.5rem", color: "var(--text-main)" }}>Đổi mật khẩu</h3>
          <div className="input-group">
            <label>Mật khẩu cũ</label>
            <input type="password" className="input" />
          </div>
          <div className="input-group">
            <label>Mật khẩu mới</label>
            <input type="password" className="input" />
          </div>

          <div className="flex" style={{ marginTop: "2rem", justifyContent: "flex-end" }}>
            <button className="btn btn-primary"><Save size={18} /> Lưu thay đổi</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
"""
}

os.makedirs('src/components', exist_ok=True)
os.makedirs('src/pages', exist_ok=True)

for path, content in files.items():
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print('Successfully created all React components!')
