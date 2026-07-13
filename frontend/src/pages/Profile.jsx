import { Typography, Row, Col, Card, Avatar, Button, Form, Input, Divider } from "antd";
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
