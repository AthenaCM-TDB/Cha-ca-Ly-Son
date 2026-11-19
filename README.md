# Website Chả Cá Đỏ Lý Sơn – Dì Trúc

Landing page tĩnh, responsive, thiết kế theo nguyên tắc Hallmark. Chạy trực tiếp với GitHub Pages, không cần backend.

## Xem trên máy tính
Mở file `index.html` trong trình duyệt. Form đặt hàng soạn nội dung để khách sao chép; **không gửi đơn lên hệ thống**.

## Đăng lên GitHub Pages
1. Đăng nhập GitHub, tạo repository mới tên `cha-ca-ly-son`, để Public.
2. Chọn **Add file → Upload files** và tải lên toàn bộ nội dung bên trong thư mục này (`index.html`, `styles.css`, `tokens.css`, `script.js`, `assets/`, `README.md`). **Không** tải cả thư mục cha làm thư mục con.
3. Vào **Settings → Pages**. Trong **Build and deployment**, chọn **Deploy from a branch**, branch `main`, folder `/(root)` rồi Save.
4. Địa chỉ dự kiến là `https://TEN-TAI-KHOAN.github.io/cha-ca-ly-son/` (thay bằng username thực tế). Đợi GitHub báo triển khai xong.

## Trước khi công khai
- Thay hình minh họa bằng ảnh thật của chả cá Dì Trúc. Hiện cả hero và thẻ sản phẩm đều là SVG minh họa, được ghi rõ.
- Xác minh tên, địa chỉ, giá, quy cách gói, số hotline/Zalo, đường dẫn Fanpage và chính sách vận chuyển. Không dùng dữ liệu mặc định như cam kết chính thức.
- Để hiển thị nút Messenger/Zalo thực sự, cần URL Fanpage và số Zalo chính thức; trong `script.js` có biến `config` dành cho việc bổ sung.
- Form chỉ tạo bản nháp để sao chép; không có cơ chế gửi đơn tự động, lưu dữ liệu, hay thanh toán.

## Cấu trúc
`index.html` – nội dung và SVG, `styles.css` – thành phần giao diện, `tokens.css` – design tokens Hallmark, `script.js` – menu/mobile, số lượng và soạn đơn, `assets/favicon.svg` – biểu tượng.

## Thiết kế
Editorial coastal food. Màu kem – xanh biển – đỏ gạch; tiêu đề DM Serif Display và chữ Be Vietnam Pro. Không dùng framework và không phụ thuộc CDN JavaScript.
