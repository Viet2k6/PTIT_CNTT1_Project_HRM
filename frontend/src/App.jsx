import { Routes, Route, Navigate } from "react-router-dom";
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
