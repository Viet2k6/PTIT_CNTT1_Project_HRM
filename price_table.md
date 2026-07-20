# BẢNG DỰ TOÁN THỜI GIAN VÀ NGÂN SÁCH (PRICE TABLE)
**Dự án:** Quản lý Nhân sự (HRM)
**Tổng thời gian triển khai:** 10 ngày (07/07/2026 - 20/07/2026)
**Tổng Effort:** 17 Mandays
**Tổng chi phí:** 17,000,000 VNĐ

*Ghi chú: Đơn giá tiêu chuẩn = 1,000,000 VNĐ/Manday (1 ngày công của 1 nhân sự).*

| STT | Nội dung công việc | Ghi chú | Thời gian (ngày) | Effort (manday) | Người thực hiện | Giá tiền | comment |
|:---:|:---|:---|:---:|:---:|:---|:---:|:---|
| **I** | **PHÂN TÍCH THIẾT KẾ** | **Giai đoạn lên ý tưởng và thiết kế** | **4.0** | **4.0** | | **4,000,000** | |
| 1.1 | Khảo sát yêu cầu và xác định bài toán | Phỏng vấn, thu thập yêu cầu khách hàng | 0.50 | 0.50 | BA | 500,000 | Hoàn thành 07/07 |
| 1.2 | Phân tích nghiệp vụ & Viết tài liệu SRS | Đặc tả bài toán theo chuyên môn nghiệp vụ | 0.50 | 0.50 | BA | 500,000 | Hoàn thành 08/07 |
| 1.3 | Lên phương án giải pháp kỹ thuật | Đề xuất công nghệ Spring Boot, React | 0.50 | 0.50 | PM | 500,000 | Hoàn thành 08/07 |
| 1.4 | Lập kế hoạch chi tiết WBS & Tiến độ | Phân chia Sprint và lập scope công việc | 0.50 | 0.50 | PM | 500,000 | Hoàn thành 09/07 |
| 1.5 | Vẽ sơ đồ kiến trúc hệ thống (System Arch)| Thiết kế tổng thể server, DB, frameworks | 0.25 | 0.25 | Backend Dev | 250,000 | Hoàn thành 10/07 |
| 1.6 | Mô hình hóa CSDL (Entity-Relationship) | Phân tích các yêu cầu và thiết kế DB Master | 0.50 | 0.50 | Backend Dev | 500,000 | Thiết kế DB 10/07 |
| 1.7 | Thiết lập chuẩn giao tiếp API Contract | Quy chuẩn định dạng JSON Request/Response| 0.25 | 0.25 | Backend Dev | 250,000 | Hoàn thành 10/07 |
| 1.8 | Phác thảo Wireframe (Luồng giao diện) | Thiết kế bố cục Web, App | 0.50 | 0.50 | Frontend Dev | 500,000 | Hoàn thành 11/07 |
| 1.9 | Thiết kế giao diện tương tác cao (UI/UX) | Áp dụng Ant Design, Dark/Light theme | 0.50 | 0.50 | Frontend Dev | 500,000 | Hoàn thành 11/07 |
| **II** | **PHÁT TRIỂN VÀ XÂY DỰNG** | **Giai đoạn Code tính năng (Coding)** | **5.0** | **10.0** | | **10,000,000** | |
| **1** | **Quản trị hệ thống** | **Cốt lõi bảo mật** | *(0.70)* | *(1.40)* | | *(1,400,000)* | |
| 1.1 | Khởi tạo Project Base & Cấu hình MySQL | Setup Git, Gradle, Vite, Database | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 05 (13/07) |
| 1.2 | Cấu hình bảo mật đa tầng Spring Security | Thiết lập CORS, Security Filter Chain | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 05 (13/07) |
| 1.3 | Thiết lập thuật toán JWT & Token Provider | Khởi tạo, mã hóa và xác thực chuỗi Token | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 05 (13/07) |
| 1.4 | Xây dựng API Đăng nhập/Đăng xuất | Trả về thông tin User kèm JWT Token | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 05 (13/07) |
| 1.5 | Tích hợp Axios Interceptor & LocalStorage | Auto đính kèm Token vào Header ở Frontend | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 05 (13/07) |
| 1.6 | Xây dựng màn hình Đăng nhập (React) | Dựng UI Form, xử lý Error hiển thị | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 05 (13/07) |
| 1.7 | Xây dựng tính năng đổi mật khẩu (Bcrypt) | Mã hóa mật khẩu Bcrypt an toàn | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 05 (13/07) |
| **2** | **Quản lý nhân viên** | **Nghiệp vụ cốt lõi** | *(0.80)* | *(1.60)* | | *(1,600,000)* | |
| 2.1 | Cấu hình Entity, Repository cho Employee | Ánh xạ Database sang Java Object | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 06 (14/07) |
| 2.2 | Xây dựng API RESTful Data Fetching | Lấy danh sách NV kèm Phân trang (Pagination) | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 06 (14/07) |
| 2.3 | Xây dựng Data Grid View hiển thị Data | Bảng danh sách NV kèm Sorting | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 06 (14/07) |
| 2.4 | Tính năng Lọc/Tìm kiếm đa điều kiện | Tìm kiếm theo tên, phòng ban, email | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 06 (14/07) |
| 2.5 | Xây dựng API Thêm mới & Cập nhật | Logic Thêm NV mới và Sửa NV cũ | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 06 (14/07) |
| 2.6 | Xử lý Form Validate (Thêm/Sửa) ở Client | Bắt lỗi email, password, số điện thoại | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 06 (14/07) |
| 2.7 | Thiết lập API Soft Delete nhân sự | Đổi trạng thái thành INACTIVE thay vì xóa hẳn| 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 06 (14/07) |
| 2.8 | Gắn Component Modal Xem chi tiết hồ sơ | Hiện Popup chứa Data cá nhân | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 06 (14/07) |
| **3** | **Quản lý phòng ban** | **Danh mục hệ thống** | *(0.40)* | *(0.80)* | | *(800,000)* | |
| 3.1 | Thiết kế cấu trúc Table & API Phòng ban | Lấy danh sách | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 06 (14/07) |
| 3.2 | Gắn Layout màn hình Danh sách Phòng ban | Bảng hiển thị phòng ban | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 06 (14/07) |
| 3.3 | Code Logic CRUD cho Phòng ban (FE+BE) | Bao gồm 4 tính năng Thêm/Sửa/Xóa/Xem | 0.20 | 0.40 | FE + BE | 400,000 | Thuộc Buổi 06 (14/07) |
| **4** | **Quản lý chức vụ** | **Danh mục hệ thống** | *(0.40)* | *(0.80)* | | *(800,000)* | |
| 4.1 | Thiết kế cấu trúc Table & API Chức vụ | Lấy danh sách | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 06 (14/07) |
| 4.2 | Gắn Layout màn hình Danh sách Chức vụ | Bảng hiển thị chức vụ | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 06 (14/07) |
| 4.3 | Code Logic CRUD cho Chức vụ (FE+BE) | Bao gồm 4 tính năng Thêm/Sửa/Xóa/Xem | 0.20 | 0.40 | FE + BE | 400,000 | Thuộc Buổi 06 (14/07) |
| **5** | **Phân quyền** | **Authorization** | *(0.10)* | *(0.20)* | | *(200,000)* | |
| 5.1 | Quyền Admin (HR) | Xử lý Role, chặn Router & API cho Admin | 0.05 | 0.10 | FE + BE | 100,000 | Thuộc Buổi 06 (14/07) |
| 5.2 | Quyền Employee | Xử lý Role, chặn Router & API cho NV | 0.05 | 0.10 | FE + BE | 100,000 | Thuộc Buổi 06 (14/07) |
| **6** | **Chấm công** | **Module chuyên sâu** | *(0.60)* | *(1.20)* | | *(1,200,000)* | |
| 6.1 | Thiết kế Schema lưu trữ TimeLog | Entity TimeLog | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 07 (15/07) |
| 6.2 | Xử lý thuật toán Check-in, tính đi muộn | Logic bắt giờ hiện tại so với 8h00 sáng | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 07 (15/07) |
| 6.3 | Xử lý thuật toán Check-out, tính về sớm | Logic bắt giờ hiện tại so với 17h00 chiều | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 07 (15/07) |
| 6.4 | Code Component Button Check-in/out | Nút bấm giao diện cho Nhân viên | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 07 (15/07) |
| 6.5 | Viết API truy xuất lịch sử chấm công | Lịch sử chấm công theo nhân viên/tháng | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 07 (15/07) |
| 6.6 | Xây dựng UI Bảng chấm công cho Admin | Bảng tổng hợp toàn bộ công ty | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 07 (15/07) |
| **7** | **Nghỉ phép** | **Module chuyên sâu** | *(0.60)* | *(1.20)* | | *(1,200,000)* | |
| 7.1 | Gắn Component Form nộp đơn xin nghỉ | UI nhập lý do, ngày nghỉ | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 07 (15/07) |
| 7.2 | Khởi tạo API lưu thông tin đơn & gán User | Lưu xuống DB | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 07 (15/07) |
| 7.3 | Xây dựng luồng phê duyệt trạng thái | Trạng thái PENDING, APPROVED, REJECTED | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 07 (15/07) |
| 7.4 | Cung cấp API Duyệt đơn cho HR/Admin | Chuyển trạng thái sang APPROVED | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 07 (15/07) |
| 7.5 | Xử lý logic API Từ chối & ghi nhận lý do | Chuyển trạng thái sang REJECTED kèm lý do | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 07 (15/07) |
| 7.6 | Màn hình Timeline theo dõi trạng thái đơn | Hiển thị tiến trình cho nhân viên | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 07 (15/07) |
| **8** | **Lương** | **Module chuyên sâu** | *(0.60)* | *(1.20)* | | *(1,200,000)* | |
| 8.1 | Lập trình công thức tính lương động | Lương = Lương cứng + Công - Phạt muộn | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 07 (15/07) |
| 8.2 | Viết Cron/API Generate bảng lương tháng | Chạy lệnh tổng hợp cuối tháng | 0.20 | 0.40 | FE + BE | 400,000 | Thuộc Buổi 07 (15/07) |
| 8.3 | Xây dựng UI Danh sách Bảng lương (HR) | Bảng lương tổng hợp các tháng (HR) | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 07 (15/07) |
| 8.4 | Trích xuất dữ liệu Phiếu lương cá nhân | API trả về chi tiết lương 1 User | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 07 (15/07) |
| 8.5 | Code Layout hiển thị Phiếu lương chi tiết | Giao diện Payslip (Employee) | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 07 (15/07) |
| **9** | **Dashboard** | **Thống kê** | *(0.60)* | *(1.20)* | | *(1,200,000)* | |
| 9.1 | Viết Query thống kê tổng quan (NV, Phòng)| Lấy số lượng từ SQL | 0.20 | 0.40 | FE + BE | 400,000 | Thuộc Buổi 08 (16/07) |
| 9.2 | Tích hợp thư viện Chart.js / Recharts | Cài đặt Recharts cho React | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 08 (16/07) |
| 9.3 | Dựng biểu đồ biến động nhân sự | Biểu đồ trực quan | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 08 (16/07) |
| 9.4 | Dựng biểu đồ thống kê tỷ lệ chuyên cần | Biểu đồ cột đi học/vắng mặt | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 08 (16/07) |
| 9.5 | Sắp xếp Widget Layout cho trang Home | Bố cục Dashboard tổng quan | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 08 (16/07) |
| **10** | **Tích hợp nâng cao** | **Mở rộng** | *(0.20)* | *(0.40)* | | *(400,000)* | |
| 10.1| Tích hợp Cloudinary/S3 cho Avatar | API Upload ảnh lên Cloud | 0.10 | 0.20 | FE + BE | 200,000 | Thuộc Buổi 08 (16/07) |
| 10.2| Export báo cáo nhân sự ra file Excel | Trích xuất báo cáo Apache POI | 0.05 | 0.10 | FE + BE | 100,000 | Thuộc Buổi 08 (16/07) |
| 10.3| Cấu hình Auto Send Email thông báo | Gửi mail báo mật khẩu/duyệt phép | 0.05 | 0.10 | FE + BE | 100,000 | Thuộc Buổi 08 (16/07) |
| **III**| **KIỂM THỬ VÀ HOÀN THIỆN** | **Nghiệm thu** | **1.0** | **3.0** | | **3,000,000** | |
| 1.1 | Xây dựng Kịch bản Test (Test Cases) | Lên danh sách các luồng cần Test | 0.10 | 0.20 | Team (4) | 200,000 | Thuộc Buổi 09 (17/07) |
| 1.2 | Viết Unit Test Backend bằng JUnit/Mockito| Viết Test cho Service/Repository | 0.20 | 0.40 | Team (4) | 400,000 | Thuộc Buổi 09 (17/07) |
| 1.3 | Viết Component Test Frontend bằng Jest | Viết Test cho React UI | 0.20 | 0.40 | Team (4) | 400,000 | Thuộc Buổi 09 (17/07) |
| 2.1 | Refactoring Code theo chuẩn Clean Code | Dọn dẹp code rác, tối ưu hàm | 0.10 | 0.40 | Team (4) | 400,000 | Thuộc Buổi 10 (20/07) |
| 2.2 | Tối ưu hóa UI/UX & Responsive đa màn hình| Tối ưu Mobile, Tablet | 0.20 | 0.80 | Team (4) | 800,000 | Thuộc Buổi 10 (20/07) |
| 2.3 | Integration Test (Kiểm thử tích hợp chéo) | Test API gắn với giao diện thực tế | 0.10 | 0.40 | Team (4) | 400,000 | Thuộc Buổi 10 (20/07) |
| 2.4 | Vá lỗi (Fix bugs) và Bàn giao Source Code| Sửa lỗi phát sinh trước khi release | 0.10 | 0.40 | Team (4) | 400,000 | Thuộc Buổi 10 (20/07) |
| | **TỔNG CỘNG** | | **10.0** | **17.0** | | **17,000,000** | |
