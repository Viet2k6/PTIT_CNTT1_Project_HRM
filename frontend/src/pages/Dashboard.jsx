import { Row, Col, Card, Statistic, Table, Typography } from "antd";
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
