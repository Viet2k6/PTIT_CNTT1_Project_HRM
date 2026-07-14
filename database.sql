CREATE DATABASE IF NOT EXISTS hrm_db
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE hrm_db;

-- 1. Bảng Phòng ban (Departments)
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 2. Bảng Chức vụ (Positions)
CREATE TABLE positions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 3. Bảng Nhân viên (Employees)
-- Đóng vai trò làm User Table cho Authentication & Core HR
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, -- Lưu trữ mật khẩu mã hóa (Bcrypt)
    department_id INT,
    position_id INT,
    role ENUM('ROLE_ADMIN', 'ROLE_EMPLOYEE') DEFAULT 'ROLE_EMPLOYEE',
    status ENUM('ACTIVE', 'INACTIVE', 'LOCKED') DEFAULT 'ACTIVE',
    avatar VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL,
    FOREIGN KEY (position_id) REFERENCES positions(id) ON DELETE SET NULL
);

-- 4. Bảng Chấm công (Attendances)
CREATE TABLE attendances (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    date DATE NOT NULL,
    check_in TIME,
    check_out TIME,
    status ENUM('ON_TIME', 'LATE', 'ABSENT', 'FORGOT_CHECKOUT') DEFAULT 'ON_TIME',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE,
    UNIQUE KEY (employee_id, date) -- Một nhân viên chỉ có 1 bản ghi chấm công mỗi ngày
);

-- 5. Bảng Đơn nghỉ phép (Leave Requests)
CREATE TABLE leave_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    reason TEXT NOT NULL,
    status ENUM('PENDING', 'APPROVED', 'REJECTED', 'CANCELED') DEFAULT 'PENDING',
    reject_reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE
);

-- 6. Bảng Lương (Payrolls)
CREATE TABLE payrolls (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    month INT NOT NULL,
    year INT NOT NULL,
    base_salary DECIMAL(15, 2) NOT NULL,
    bonus DECIMAL(15, 2) DEFAULT 0,
    deductions DECIMAL(15, 2) DEFAULT 0,
    total_salary DECIMAL(15, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE,
    UNIQUE KEY (employee_id, month, year) -- Mỗi tháng 1 nhân viên chỉ có 1 phiếu lương
);


INSERT INTO departments (name, description) VALUES 
('Phòng IT', 'Phòng Công nghệ thông tin và Phát triển phần mềm'),
('Phòng HR', 'Phòng Nhân sự - Hành chính'),
('Phòng Kế toán', 'Phòng Tài chính - Kế toán');

INSERT INTO positions (name, description) VALUES 
('Trưởng phòng', 'Người đứng đầu quản lý phòng ban'),
('Chuyên viên', 'Nhân viên chính thức của phòng ban'),
('Thực tập sinh', 'Nhân viên đang trong quá trình đào tạo');

-- Lưu ý: Mật khẩu dưới đây đều được mã hóa Bcrypt cho chuỗi '123456'
-- Mật khẩu thật khi đăng nhập: 123456
INSERT INTO employees (full_name, email, password, department_id, position_id, role, status) VALUES 
('Trần Đăng Việt', 'admin@gmail.com', '$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00DMxs.AQubh4a', 2, 1, 'ROLE_ADMIN', 'ACTIVE'),
('Nguyễn Văn A', 'a123@gmail.com', '$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00DMxs.AQubh4a', 1, 2, 'ROLE_EMPLOYEE', 'ACTIVE');
