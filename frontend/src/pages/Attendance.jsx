import { useState } from "react";
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
