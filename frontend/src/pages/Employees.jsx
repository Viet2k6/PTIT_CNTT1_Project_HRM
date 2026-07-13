import { Table, Button, Space, Input, Typography, Tag, Popconfirm } from "antd";
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
