# RentMe — Thuê outfit, tự tin tỏa sáng

Website giới thiệu dự án khởi nghiệp của nhóm HKDN, xây dựng bằng HTML, CSS và JavaScript thuần.

## Mở website trên Windows

1. Tải hoặc giải nén thư mục website, bảo đảm `index.html`, `style.css`, `script.js` và thư mục `assets` nằm cùng cấp.
2. Mở thư mục trong File Explorer.
3. Nhấp đúp `index.html`. Website chạy trực tiếp trong trình duyệt hiện có; không cần cài Node.js, cơ sở dữ liệu, tài khoản hay API.
4. Nếu trình duyệt chặn một tính năng cục bộ, thử mở bằng Microsoft Edge hoặc Chrome bản mới.

## Cấu trúc

- `index.html` — nội dung và cấu trúc các phần.
- `style.css` — giao diện responsive cho máy tính, máy tính bảng và điện thoại.
- `script.js` — menu mobile, cuộn về đầu trang và hiệu ứng xuất hiện khi cuộn.
- `assets/` — minh họa SVG tự tạo, có thể thay bằng ảnh thương hiệu thật.

## Hình ảnh và phụ thuộc

Hai ảnh trong `assets/` là minh họa vector được tạo riêng cho bản mẫu. Chúng không phải ảnh sản phẩm đang có, ảnh khảo sát, khách hàng, thành viên hay cửa hàng thật. Để thay ảnh, đặt ảnh đã được nhóm chụp/quyền sử dụng trong `assets/`, sau đó cập nhật đường dẫn `src` trong `index.html`.

Website không dùng thư viện JavaScript hay dịch vụ/API bên ngoài. Chữ tiêu đề và giao diện cố gắng tải Playfair Display và DM Sans từ Google Fonts; khi không có internet, trình duyệt tự dùng Georgia và Arial làm phông thay thế.

## Nội dung và độ chắc chắn của số liệu

Nội dung được biên tập từ `business-plan.md`. Phần tóm tắt trong tài liệu nói doanh thu/lợi nhuận chưa chốt ở giai đoạn đầu; phần tài chính sau đó đưa ra kịch bản dự báo theo giả định nhóm, kỳ tháng 1–6/2027. Website trình bày cả hai ngữ cảnh. Các mức giá Combo Basic 130.000–150.000 VNĐ cũng được ghi là phương án giả định, chưa phải bảng giá chốt.

Số liệu thị trường, đối thủ và tài chính được dẫn như thông tin theo báo cáo/giả định của nhóm, không phải dữ liệu vận hành thực tế của RentMe. Tài liệu tham khảo giữ liên kết có trong nguồn; URL gắn với mục McKinsey trong tài liệu gốc trỏ tới trang GSO nên website ghi chú rõ để người đọc đối chiếu. Tài liệu không cung cấp URL trực tiếp cho một số số liệu thị trường.

## Tùy chỉnh

- Đổi màu thương hiệu và bố cục trong `style.css`.
- Sửa câu chữ, thành viên và nguồn trong `index.html`.
- Thay minh họa trong `assets/` bằng ảnh thật được nhóm cho phép sử dụng; không gắn ảnh minh họa với khảo sát hay khách hàng thực tế.
