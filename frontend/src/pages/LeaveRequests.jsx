import { Button, Typography, Table, Tag, Row, Col, Card, Statistic, Space } from "antd";
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
