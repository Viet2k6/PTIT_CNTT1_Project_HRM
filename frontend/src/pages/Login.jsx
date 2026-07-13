import { Form, Input, Button, Checkbox, Card } from "antd";
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
