**TÀI LIỆU ĐẶC TẢ NGHIỆP VỤ**
**DỰ ÁN: Hệ thống quản lý nhân sự HRM**

Người thực hiện : Trần Đăng Việt
Ngày ban hành : 10/07/2026
Mã tài liệu : SRS-HRM-001
Phiên bản : 1.0

| Trạng thái tài liệu | APPROVED |
| :--- | :--- |
| **Người viết** | Trần Đăng Việt |
| **Người review** | Senior BA |
| **Người phê duyệt** | Giảng viên hướng dẫn |
| **QA** | |
| **Phiên bản** | 1.0 |
| **Ngày phát hành** | 10/07/2026 |

**KIỂM SOÁT TÀI LIỆU**

**Thông tin kiểm soát**

| Ngày | Người lập / Kết quả | Người kiểm tra / Kết quả | Người phê duyệt / Kết quả |
| :--- | :--- | :--- | :--- |
| 10/07/2026 | Trần Đăng Việt | Senior BA / Đạt | |

**Thông tin lịch sử**

| Ngày | Người thực hiện | Phiên bản | Nội dung |
| :--- | :--- | :--- | :--- |
| 10/07/2026 | Trần Đăng Việt | 0.1 | Khởi tạo tài liệu DRAFT |
| 10/07/2026 | Trần Đăng Việt | 1.0 | Chỉnh sửa theo BA Review, bổ sung Validation, Business Rule, NFR và tổng hợp file |

**Tài liệu liên quan, tham khảo**

| Ngày | Tên tài liệu | Nguồn |
| :--- | :--- | :--- |
| | | |

---

## MỤC LỤC

- [PHẦN 1: GIỚI THIỆU](#phần-1-giới-thiệu)
- [PHẦN 2: YÊU CẦU TỔNG THỂ](#phần-2-yêu-cầu-tổng-thể)
- [PHẦN 3: CHỨC NĂNG](#phần-3-chức-năng)
- [PHẦN 4: CÁC COMPONENT, THÔNG BÁO, CẢNH BÁO](#phần-4-các-component-thông-báo-cảnh-báo)
- [PHẦN 5: LINK ISSUE](#phần-5-link-issue)

---

## PHẦN 1: GIỚI THIỆU

**1.1 MỤC ĐÍCH TÀI LIỆU**
Tài liệu này cung cấp mô tả chi tiết về các yêu cầu nghiệp vụ, chức năng và phi chức năng của hệ thống Quản lý nhân sự (HRM). Tài liệu là cơ sở cốt lõi để tiến hành thiết kế cơ sở dữ liệu, thiết kế kiến trúc, phát triển phần mềm (Frontend, Backend) và đóng vai trò là tiêu chuẩn để nghiệm thu hệ thống sau khi hoàn thành.

**1.2 PHẠM VI TÀI LIỆU**
Tài liệu bao gồm các đặc tả cho các phân hệ chính của dự án HRM (Phiên bản MVP khả thi tối thiểu):
- **Phân hệ Quản trị hệ thống & Bảo mật:** Đăng nhập, đăng xuất, quên mật khẩu, quản lý thông tin cá nhân và phân quyền truy cập.
- **Phân hệ Quản lý tổ chức:** Quản lý danh mục Phòng ban và Chức vụ.
- **Phân hệ Quản lý Core HR:** Quản lý vòng đời Nhân viên (CRUD) và xuất danh sách dữ liệu nhân viên.
- **Phân hệ Quản lý Chấm công:** Ghi nhận giờ Check-in / Check-out và tra cứu lịch sử làm việc.
- **Phân hệ Quản lý Nghỉ phép:** Quy trình nộp đơn xin nghỉ, hủy đơn, phê duyệt/từ chối đơn từ.
- **Phân hệ Quản lý Lương:** Cập nhật bảng lương tĩnh và tra cứu phiếu lương cá nhân.
- **Phân hệ Báo cáo thống kê:** Dashboard hiển thị tổng quan dữ liệu nhân sự của doanh nghiệp.

**1.3 TỔNG QUAN ỨNG DỤNG**
Ứng dụng HRM là một hệ thống dựa trên nền tảng Web phục vụ cho doanh nghiệp. 
- **Frontend:** ReactJS 
- **Backend:** Spring Boot 3 - Java 17, Spring Security + JWT
- **Database:** MySQL 

**1.4 THUẬT NGỮ VIẾT TẮT**

| STT | Từ viết tắt | Diễn giải |
| :--- | :--- | :--- |
| 1 | HRM | Human Resource Management (Quản lý nhân sự) |
| 2 | CRUD | Create, Read, Update, Delete (Thêm, Xem, Sửa, Xóa) |
| 3 | JWT | JSON Web Token (Cơ chế bảo mật xác thực dạng chuỗi) |
| 4 | MVP | Minimum Viable Product (Sản phẩm khả thi tối thiểu) |
| 5 | NFR | Non-Functional Requirement (Yêu cầu phi chức năng) |
*(Ghi chú: Trong phạm vi đồ án, Actor Admin đóng vai trò gộp của cả nhân sự HR và Trưởng phòng Manager).*

---

## PHẦN 2: YÊU CẦU TỔNG THỂ

**2.1 Sơ đồ quan hệ đối tượng (ERD)**

![diagram](./diagrams\srs_temp-1.svg)

**2.2 Sơ đồ Use Case**

![diagram](./diagrams\srs_temp-2.svg)

**2.3 Sơ đồ luồng (User Flow: Nghỉ phép)**

![diagram](./diagrams\srs_temp-3.svg)

**2.4 Sơ đồ chuyển trạng thái (State Diagram: Đơn xin nghỉ phép)**

![diagram](./diagrams\srs_temp-4.svg)

**2.5 Phân quyền**

**2.5.1 Phân quyền chức năng**

| Phân hệ | Chức năng (Use Case) | ROLE_ADMIN | ROLE_EMPLOYEE |
| :--- | :--- | :---: | :---: |
| **Auth** | Đăng nhập, Đăng xuất, Quên Mật khẩu | X | X |
| **Core HR** | Xem / Cập nhật hồ sơ cá nhân | X | X |
| | CRUD Phòng ban, Chức vụ | X | |
| | CRUD Hồ sơ nhân viên (Bao gồm Export Excel) | X | |
| **Timekeeping**| Check-in / Check-out | | X |
| | Xem lịch sử chấm công | X | X |
| **Leave** | Gửi/Hủy đơn xin nghỉ phép | | X |
| | Phê duyệt đơn xin nghỉ phép | X | |
| **Payroll** | Tạo/Nhập dữ liệu lương | X | |
| | Xem phiếu lương | | X |
| **Dashboard** | Xem biểu đồ thống kê hệ thống | X | |

**2.5.2 Phân quyền dữ liệu**
- **ROLE_ADMIN:** Quyền Read/Write toàn bộ dữ liệu công ty.
- **ROLE_EMPLOYEE:** Isolate Data. Chỉ truy xuất được dữ liệu có `user_id` của chính mình.

**2.6 Site Map**
![diagram](./diagrams\srs_temp-5.svg)

---

## PHẦN 3: CHỨC NĂNG

| Mã | Tên chức năng | Phân hệ | Tác nhân (Actor) |
| :--- | :--- | :--- | :--- |
| UC001 | Đăng nhập hệ thống | Auth & Security | Admin, Employee |
| UC002 | Đăng xuất | Auth & Security | Admin, Employee |
| UC003 | Quên mật khẩu | Auth & Security | Admin, Employee |
| UC004 | Quản lý thông tin cá nhân | Core HR | Admin, Employee |
| UC005 | Quản lý phòng ban | Organization | Admin |
| UC006 | Quản lý chức vụ | Organization | Admin |
| UC007 | Quản lý hồ sơ nhân viên | Core HR | Admin |
| UC008 | Chấm công (Check-in/out) | Time & Attendance | Employee |
| UC009 | Xem lịch sử chấm công | Time & Attendance | Admin, Employee |
| UC010 | Gửi và Hủy đơn xin nghỉ phép | Leave Management | Employee |
| UC011 | Duyệt đơn xin nghỉ phép | Leave Management | Admin |
| UC012 | Quản lý bảng lương | Payroll | Admin |
| UC013 | Xem phiếu lương | Payroll | Employee |
| UC014 | Xem Dashboard thống kê | Dashboard | Admin |

### 3.1. Đăng nhập hệ thống (UC001)

#### 3.1.1. Đặc tả Use Case
| | |
|---|---|
| **Use Case ID** | UC001 |
| **Mô tả** | Người dùng đăng nhập vào hệ thống để sử dụng các chức năng |
| **Tác nhân (Actor(s))** | Admin, Employee |
| **Sự ưu tiên (Priority)** | Cao |
| **Trigger** | Người dùng truy cập vào trang đăng nhập |
| **Điều kiện cần (Pre-Condition)** | Tài khoản tồn tại và đang ở trạng thái Active |
| **Điều kiện sau (Post-Condition(s))** | Người dùng đăng nhập thành công và được chuyển hướng tới trang chủ theo phân quyền |
| **Luồng cơ bản (Basic Flow)** | 1. Người dùng nhập Email và Password.<br>2. Nhấn nút "Đăng nhập".<br>3. Hệ thống kiểm tra thông tin (Call API).<br>4. Hệ thống trả về JWT Token.<br>5. Chuyển hướng theo Role. |
| **Luồng thay thế (Alternative Flow)** | 1a. Người dùng bấm "Quên mật khẩu": Hệ thống chuyển hướng sang màn hình Quên mật khẩu. |
| **Luồng ngoại lệ (Exception Flow)** | 1b. Nhập sai Email hoặc Password: Báo lỗi "Tài khoản hoặc mật khẩu không chính xác".<br>2b. Tài khoản bị khóa: Báo lỗi "Tài khoản đã bị khóa". |
| **Ràng buộc (Business Rules)** | Mật khẩu là bắt buộc. Token hết hạn sau 24h. |
| **Yêu cầu phi chức năng (Non-Functional Requirement)** | API phản hồi < 1s, Password mã hóa BCrypt. |

#### 3.1.2. Sơ đồ luồng chi tiết
[Sơ đồ luồng chi tiết cho Use Case Đăng nhập sẽ được cập nhật tại đây]

#### 3.1.3. Giao diện
[Hình ảnh mockup giao diện Đăng nhập sẽ được cập nhật tại đây]

#### 3.1.4. Mô tả chi tiết
| Tên tiếng Việt | Tên tiếng Anh | Loại | Bắt buộc? | Mô tả |
|---|---|---|---|---|
| Địa chỉ Email | Email | Text | Có | Định dạng email chuẩn (VD: abc@gmail.com) |
| Mật khẩu | Password | Password | Có | Độ dài tối thiểu 6 ký tự |

### 3.2. Quên mật khẩu (UC003)

#### 3.2.1. Đặc tả Use Case
| | |
|---|---|
| **Use Case ID** | UC003 |
| **Mô tả** | Người dùng yêu cầu cấp lại mật khẩu khi quên |
| **Tác nhân (Actor(s))** | Admin, Employee |
| **Sự ưu tiên (Priority)** | Trung bình |
| **Trigger** | Người dùng nhấn "Quên mật khẩu" ở màn hình Đăng nhập |
| **Điều kiện cần (Pre-Condition)** | Người dùng chưa đăng nhập |
| **Điều kiện sau (Post-Condition(s))** | Người dùng nhận được email chứa link thiết lập lại mật khẩu |
| **Luồng cơ bản (Basic Flow)** | 1. Người dùng nhập Email.<br>2. Nhấn gửi yêu cầu.<br>3. Hệ thống kiểm tra Email.<br>4. Hệ thống gửi link reset có token qua mail.<br>5. Người dùng click link và đặt lại mật khẩu mới. |
| **Luồng thay thế (Alternative Flow)** | Không có |
| **Luồng ngoại lệ (Exception Flow)** | 1a. Email không tồn tại: Báo lỗi "Email không tồn tại trong hệ thống". |
| **Ràng buộc (Business Rules)** | Link reset mật khẩu chỉ có hiệu lực trong 15 phút. |
| **Yêu cầu phi chức năng (Non-Functional Requirement)** | Email gửi đi không quá 5s. |

#### 3.2.2. Sơ đồ luồng chi tiết
[Sơ đồ luồng chi tiết cho Use Case Quên mật khẩu sẽ được cập nhật tại đây]

#### 3.2.3. Giao diện
[Hình ảnh mockup giao diện Quên mật khẩu sẽ được cập nhật tại đây]

#### 3.2.4. Mô tả chi tiết
| Tên tiếng Việt | Tên tiếng Anh | Loại | Bắt buộc? | Mô tả |
|---|---|---|---|---|
| Địa chỉ Email | Email | Text | Có | Email tài khoản cần khôi phục |
| Mật khẩu mới | New Password | Password | Có | Mật khẩu mới để đặt lại |

### 3.3. Quản lý thông tin cá nhân (UC004)

#### 3.3.1. Đặc tả Use Case
| | |
|---|---|
| **Use Case ID** | UC004 |
| **Mô tả** | Xem và cập nhật thông tin cá nhân, đổi mật khẩu |
| **Tác nhân (Actor(s))** | Admin, Employee |
| **Sự ưu tiên (Priority)** | Trung bình |
| **Trigger** | Người dùng click vào Hồ sơ của tôi (My Profile) |
| **Điều kiện cần (Pre-Condition)** | Người dùng đã đăng nhập thành công |
| **Điều kiện sau (Post-Condition(s))** | Dữ liệu cá nhân (Avatar, Mật khẩu...) được cập nhật trên DB |
| **Luồng cơ bản (Basic Flow)** | 1. Hệ thống hiển thị thông hiện tại.<br>2. Người dùng chỉnh sửa thông tin/mật khẩu.<br>3. Nhấn "Lưu thay đổi".<br>4. Hệ thống kiểm tra Validation.<br>5. Lưu DB và hiển thị thông báo thành công. |
| **Luồng thay thế (Alternative Flow)** | Không có |
| **Luồng ngoại lệ (Exception Flow)** | 1a. Upload file sai định dạng/kích thước: Báo lỗi. |
| **Ràng buộc (Business Rules)** | Avatar chỉ chấp nhận định dạng JPG/PNG và dung lượng < 2MB. |
| **Yêu cầu phi chức năng (Non-Functional Requirement)** | Thời gian upload ảnh < 2s. |

#### 3.3.2. Sơ đồ luồng chi tiết
[Sơ đồ luồng chi tiết cho Use Case Quản lý thông tin cá nhân sẽ được cập nhật tại đây]

#### 3.3.3. Giao diện
[Hình ảnh mockup giao diện Hồ sơ của tôi sẽ được cập nhật tại đây]

#### 3.3.4. Mô tả chi tiết
| Tên tiếng Việt | Tên tiếng Anh | Loại | Bắt buộc? | Mô tả |
|---|---|---|---|---|
| Ảnh đại diện | Avatar | File | Không | Định dạng JPG/PNG, < 2MB |
| Mật khẩu cũ | Old Password | Password | Có | Nhập mật khẩu hiện tại để xác thực khi đổi pass |
| Mật khẩu mới | New Password | Password | Có | Mật khẩu mới |

### 3.4. Quản lý hồ sơ nhân viên (UC007)

#### 3.4.1. Đặc tả Use Case
| | |
|---|---|
| **Use Case ID** | UC007 |
| **Mô tả** | Admin thêm mới, xem, sửa, xóa (CRUD) hồ sơ nhân viên |
| **Tác nhân (Actor(s))** | Admin |
| **Sự ưu tiên (Priority)** | Cao |
| **Trigger** | Admin truy cập mục Quản lý Nhân sự |
| **Điều kiện cần (Pre-Condition)** | Admin đã đăng nhập |
| **Điều kiện sau (Post-Condition(s))** | Hệ thống cập nhật danh sách và lưu trữ nhân viên mới/thay đổi |
| **Luồng cơ bản (Basic Flow - Thêm)** | 1. Admin nhấn "Thêm nhân viên".<br>2. Điền thông tin (Tên, Email, Chức vụ, Phòng ban).<br>3. Nhấn Lưu.<br>4. Hệ thống validate và lưu DB.<br>5. Hệ thống gửi Email cấp mật khẩu mặc định cho nhân viên mới. |
| **Luồng thay thế (Alternative Flow)** | 1a. Admin nhấn "Reset Password": Cấp lại mật khẩu mặc định cho nhân viên. |
| **Luồng ngoại lệ (Exception Flow)** | 1a. Trùng Email: Báo lỗi "Email này đã được sử dụng". |
| **Ràng buộc (Business Rules)** | Email là Unique. Bắt buộc gán Phòng ban và Chức vụ. |
| **Yêu cầu phi chức năng (Non-Functional Requirement)** | Export Excel danh sách nhân viên trả về file trong < 3s. |

#### 3.4.2. Sơ đồ luồng chi tiết
[Sơ đồ luồng chi tiết cho Use Case Quản lý nhân viên sẽ được cập nhật tại đây]

#### 3.4.3. Giao diện
[Hình ảnh mockup giao diện Quản lý nhân viên sẽ được cập nhật tại đây]

#### 3.4.4. Mô tả chi tiết
| Tên tiếng Việt | Tên tiếng Anh | Loại | Bắt buộc? | Mô tả |
|---|---|---|---|---|
| Họ và tên | Full Name | Text | Có | Tên đầy đủ của nhân viên |
| Email | Email | Text | Có | Email công ty cấp |
| Phòng ban | Department | Dropdown | Có | Chọn từ danh mục phòng ban |
| Chức vụ | Position | Dropdown | Có | Chọn từ danh mục chức vụ |

### 3.5. Chấm công Check-in/out (UC008)

#### 3.5.1. Đặc tả Use Case
| | |
|---|---|
| **Use Case ID** | UC008 |
| **Mô tả** | Nhân viên thực hiện điểm danh khi đến công ty và khi ra về |
| **Tác nhân (Actor(s))** | Employee |
| **Sự ưu tiên (Priority)** | Cao |
| **Trigger** | Nhân viên nhấn nút Check-in / Check-out trên màn hình |
| **Điều kiện cần (Pre-Condition)** | Nhân viên đã đăng nhập |
| **Điều kiện sau (Post-Condition(s))** | Dữ liệu thời gian được ghi nhận vào DB |
| **Luồng cơ bản (Basic Flow)** | 1. Nhân viên nhấn nút Check-in lúc đến.<br>2. Hệ thống ghi nhận giờ hiện tại.<br>3. Hiển thị trạng thái Đã Check-in.<br>4. Cuối ngày nhân viên nhấn Check-out.<br>5. Ghi nhận thời gian ra về. |
| **Luồng thay thế (Alternative Flow)** | Không có |
| **Luồng ngoại lệ (Exception Flow)** | 1a. Quên Check-out: Hệ thống Job Scheduler (23:59) tự động chốt và đánh dấu "Quên Check-out". |
| **Ràng buộc (Business Rules)** | Khung giờ làm việc: 08:00 - 17:00. Check-in sau 08:00 tính là Đi muộn. Chỉ được Check-in 1 lần mỗi ngày. |
| **Yêu cầu phi chức năng (Non-Functional Requirement)** | Giao diện phải Mobile-friendly để tiện chấm công trên điện thoại. |

#### 3.5.2. Sơ đồ luồng chi tiết
[Sơ đồ luồng chi tiết cho Use Case Chấm công sẽ được cập nhật tại đây]

#### 3.5.3. Giao diện
[Hình ảnh mockup giao diện Chấm công sẽ được cập nhật tại đây]

#### 3.5.4. Mô tả chi tiết
| Tên tiếng Việt | Tên tiếng Anh | Loại | Bắt buộc? | Mô tả |
|---|---|---|---|---|
| Nút Check-in | Btn Check-in | Button | Có | Ghi nhận thời gian đến |
| Nút Check-out | Btn Check-out | Button | Có | Ghi nhận thời gian về |

### 3.6. Gửi và Hủy đơn xin nghỉ phép (UC010)

#### 3.6.1. Đặc tả Use Case
| | |
|---|---|
| **Use Case ID** | UC010 |
| **Mô tả** | Nhân viên nộp đơn xin nghỉ phép và có thể hủy khi chưa được duyệt |
| **Tác nhân (Actor(s))** | Employee |
| **Sự ưu tiên (Priority)** | Cao |
| **Trigger** | Nhân viên vào màn hình Xin nghỉ phép và nhấn Tạo đơn |
| **Điều kiện cần (Pre-Condition)** | Đăng nhập với quyền Employee |
| **Điều kiện sau (Post-Condition(s))** | Đơn được tạo với trạng thái PENDING, Admin nhận được Email thông báo |
| **Luồng cơ bản (Basic Flow)** | 1. Nhân viên chọn ngày bắt đầu, ngày kết thúc và lý do.<br>2. Nhấn Submit.<br>3. Hệ thống validate số ngày nghỉ <= số phép còn lại.<br>4. Lưu DB với status PENDING.<br>5. Gửi email cho Admin. |
| **Luồng thay thế (Alternative Flow)** | 1a. Hủy đơn: Nhân viên xem đơn PENDING -> Nhấn "Thu hồi" -> Đơn chuyển sang trạng thái CANCELED. |
| **Luồng ngoại lệ (Exception Flow)** | 1a. Nhập ngày trong quá khứ: Hệ thống chặn và báo lỗi "Ngày không hợp lệ". |
| **Ràng buộc (Business Rules)** | Quỹ phép: 12 ngày/năm. Không nộp vượt quỹ phép (trừ nghỉ không lương). Start_Date >= Today, End_Date >= Start_Date. |
| **Yêu cầu phi chức năng (Non-Functional Requirement)** | Không có |

#### 3.6.2. Sơ đồ luồng chi tiết
*(Xem sơ đồ User Flow ở phần 2.3)*

#### 3.6.3. Giao diện
[Hình ảnh mockup giao diện Xin nghỉ phép sẽ được cập nhật tại đây]

#### 3.6.4. Mô tả chi tiết
| Tên tiếng Việt | Tên tiếng Anh | Loại | Bắt buộc? | Mô tả |
|---|---|---|---|---|
| Ngày bắt đầu | Start Date | Date | Có | Ngày bắt đầu nghỉ (>= Today) |
| Ngày kết thúc | End Date | Date | Có | Ngày kết thúc (>= Start Date) |
| Lý do | Reason | Textarea | Có | Lý do xin nghỉ chi tiết |

### 3.7. Duyệt đơn xin nghỉ phép (UC011)

#### 3.7.1. Đặc tả Use Case
| | |
|---|---|
| **Use Case ID** | UC011 |
| **Mô tả** | Admin xem xét và phê duyệt/từ chối đơn xin nghỉ phép của nhân viên |
| **Tác nhân (Actor(s))** | Admin |
| **Sự ưu tiên (Priority)** | Cao |
| **Trigger** | Admin click vào 1 đơn xin nghỉ phép đang chờ duyệt (PENDING) |
| **Điều kiện cần (Pre-Condition)** | Đăng nhập với quyền Admin |
| **Điều kiện sau (Post-Condition(s))** | Đơn chuyển trạng thái APPROVED/REJECTED. Email kết quả gửi về cho Employee. |
| **Luồng cơ bản (Basic Flow)** | 1. Admin xem chi tiết đơn.<br>2. Nhấn "Phê duyệt" (Approve).<br>3. Hệ thống trừ quỹ phép năm của nhân viên.<br>4. Cập nhật trạng thái đơn thành APPROVED.<br>5. Gửi email thông báo cho Employee. |
| **Luồng thay thế (Alternative Flow)** | 2a. Admin nhấn "Từ chối" (Reject).<br>3a. Hệ thống yêu cầu nhập lý do từ chối.<br>4a. Cập nhật trạng thái REJECTED và gửi email. |
| **Luồng ngoại lệ (Exception Flow)** | Không có |
| **Ràng buộc (Business Rules)** | Bắt buộc phải có lý do nếu Reject đơn. |
| **Yêu cầu phi chức năng (Non-Functional Requirement)** | Không có |

#### 3.7.2. Sơ đồ luồng chi tiết
[Sơ đồ luồng chi tiết cho Use Case Duyệt đơn sẽ được cập nhật tại đây]

#### 3.7.3. Giao diện
[Hình ảnh mockup giao diện Duyệt đơn sẽ được cập nhật tại đây]

#### 3.7.4. Mô tả chi tiết
| Tên tiếng Việt | Tên tiếng Anh | Loại | Bắt buộc? | Mô tả |
|---|---|---|---|---|
| Lý do từ chối | Reject Reason | Textarea | Có (khi Reject) | Bắt buộc nhập nếu từ chối đơn của nhân viên |

*(Các Use Case còn lại như Xem Danh sách, CRUD Phòng Ban có luồng tương tự mô hình Read/Write cơ bản).*

---

## PHẦN 4: CÁC COMPONENT, THÔNG BÁO, CẢNH BÁO

**4.1. Danh sách Popup (Modal Dialog)**
- Popup Form Tạo/Sửa Nhân viên, Phòng ban, Chức vụ.
- Popup Yêu cầu nhập lý do Reject đơn nghỉ phép.

**4.2. Toast Notification**
- Thông báo hiển thị ở góc trên bên phải (Top-Right), tự ẩn sau 3 giây. Có màu Xanh (Thành công), Đỏ (Lỗi), Vàng (Cảnh báo).

**4.3. Confirm Dialog**
- Cảnh báo thao tác xóa/hủy: "Bạn có chắc chắn muốn xóa nhân viên này?", "Bạn có chắc chắn muốn thu hồi đơn xin nghỉ?".

**4.4. Validation Message**
- Text màu đỏ báo lỗi Validate Form (VD: *"Avatar vượt quá 2MB"*, *"Email không đúng định dạng"*, *"Ngày nghỉ không hợp lệ"*).

**4.5. Success Message**
- *"Thêm mới nhân viên thành công"*.
- *"Check-in thành công. Chúc bạn làm việc hiệu quả"*.
- *"Đổi mật khẩu thành công. Vui lòng đăng nhập lại"*.

**4.6. Error Message**
- *"Email này đã được sử dụng"*.
- *"Tài khoản đã bị khóa"*.
- *"Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại"* (Xử lý khi JWT hết hạn).

**4.7. Warning Message**
- *"Bạn đã check-in ngày hôm nay rồi"*.
- *"Bạn sắp sử dụng hết quỹ phép năm"*.

---

## PHẦN 5: LINK ISSUE

Do đây là dự án cá nhân, các Use Case được liên kết trực tiếp với hệ thống **GitHub Issues** để theo dõi Task và Commit code.

| Mã UC | Tên Task (Feature) | Trạng thái | GitHub Issue Link |
| :--- | :--- | :--- | :-- |
| UC001 | API & UI Đăng nhập (JWT) | To Do | |
| UC003 | Tính năng Quên mật khẩu (Send Email) | To Do | |
| UC004 | Layout Dashboard & Profile | To Do | |
| UC007 | API CRUD Employee & Reset Pass | To Do ||![img.png](img.png)
| UC008 | Logic Chấm công & Auto Checkout | To Do | |
| UC010 | Submit Leave Request & Validate | To Do | |
| UC011 | Approve Leave Request & Minus Quota | To Do | |
