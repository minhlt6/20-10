# 🌸 Website Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10 — Hành Trình 6 Chương Kỳ Diệu

Món quà kỹ thuật số tương tác gồm **6 chương điện ảnh** dành tặng các bạn nữ trong lớp đại học nhân ngày Phụ nữ Việt Nam 20/10.

---

## ✨ Cấu trúc dự án

```text
20-10/
├── index.html          # Cấu trúc 6 chương trải nghiệm, hộp quà 3D, khu vườn hoa, bầu trời sao & modals
├── style.css           # Thiết kế Dreamy/Romantic/Cinematic, Glassmorphism, 3D Cube, Animation & Responsive
├── script.js           # Cấu hình cá nhân hóa (WOMENS_DAY_CONFIG), Canvas Particle, Web Audio Piano & Logic 6 chương
├── README.md           # Hướng dẫn chạy máy tính, tùy chỉnh cá nhân hóa & triển khai GitHub Pages
└── assets/
    ├── favicon.svg     # Biểu tượng bông hoa 20/10 trên tab trình duyệt
    ├── bouquet.svg     # Minh họa bó hoa nghệ thuật chất lượng cao
    └── README.md       # Hướng dẫn thêm nhạc nền MP3 tùy chọn
```

---

## 🚀 Cách chạy trên máy tính

Vì dự án được xây dựng bằng **HTML5, CSS3 và Vanilla JavaScript thuần** (không cần cài đặt Node.js hay backend), bạn có thể chạy ngay bằng một trong các cách sau:

### Cách 1: Mở trực tiếp
Nhấp đúp vào file `index.html` để mở ngay trên trình duyệt Chrome, Edge, Safari hoặc Firefox.

### Cách 2: Chạy bằng VS Code Live Server (Khuyên dùng)
1. Mở thư mục dự án trong **Visual Studio Code**.
2. Cài đặt tiện ích mở rộng **Live Server** (của Ritwick Dey).
3. Nhấp chuột phải vào `index.html` → chọn **"Open with Live Server"**.
4. Trình duyệt sẽ tự động mở tại địa chỉ `http://127.0.0.1:5500`.

### Cách 3: Chạy bằng Python HTTP Server
Mở Terminal / PowerShell tại thư mục dự án và chạy:
```bash
python -m http.server 8080
```
Sau đó truy cập `http://localhost:8080`.

---

## 💌 Cách cá nhân hóa tên lớp, lời chúc và danh sách các bạn nữ

Mở file `script.js`, ngay ở phần đầu tiên bạn sẽ thấy đối tượng `WOMENS_DAY_CONFIG`:

```javascript
const WOMENS_DAY_CONFIG = {
  className: "Lớp Đại Học Thân Yêu Của Chúng Mình",
  senderName: "Tập thể các bạn nam trong lớp ❤️",
  prologueText: "Có một điều đặc biệt mà chúng tớ muốn dành tặng các cậu...",
  // ...
  femaleClassmates: [
    { name: "Tất cả các bạn nữ", note: "" },
    { name: "Minh Anh", note: "Lời chúc riêng dành cho Minh Anh..." },
    // Thêm tên các bạn nữ trong lớp tại đây
  ],
  musicUrl: "" // Để trống để dùng nhạc Piano tự động hoặc điền "assets/music.mp3"
};
```

Ngoài ra, ngay trên giao diện website, người dùng có thể nhấn nút **"💌 Gửi: Các bạn nữ"** ở góc trên để chọn tên của mình hoặc tự nhập tên để cá nhân hóa toàn bộ lời chúc và tải về **Tấm Thiệp Kỷ Niệm 20/10 (PNG)** mang tên riêng!

---

## 🌐 Cách đưa website lên GitHub Pages miễn phí & Tạo mã QR chia sẻ

### Bước 1: Đưa mã nguồn lên GitHub
1. Đăng nhập vào [GitHub](https://github.com/) và nhấn **New repository**.
2. Đặt tên repository (ví dụ: `qua-tang-20-10`), chọn **Public** rồi nhấn **Create repository**.
3. Tải toàn bộ các file (`index.html`, `style.css`, `script.js`, thư mục `assets/`) lên repository bằng giao diện web (**Add file → Upload files**) hoặc bằng Git:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Website chuc mung 20/10"
   git branch -M main
   git remote add origin https://github.com/<ten-tai-khoan>/qua-tang-20-10.git
   git push -u origin main
   ```

### Bước 2: Bật GitHub Pages
1. Trong trang repository trên GitHub, vào mục **Settings** → chọn **Pages** ở thanh menu bên trái.
2. Tại mục **Build and deployment** → **Branch**, chọn nhánh `main` và thư mục `/ (root)`, sau đó nhấn **Save**.
3. Đợi khoảng 1–2 phút, GitHub sẽ cấp cho bạn đường link dạng:
   `https://<ten-tai-khoan>.github.io/qua-tang-20-10/`

### Bước 3: Tạo mã QR để tặng các bạn nữ
1. Sao chép đường link GitHub Pages vừa tạo.
2. Truy cập công cụ tạo QR miễn phí như [QRCode Monkey](https://www.qrcode-monkey.com/) hoặc dùng tính năng **Chia sẻ → Tạo mã QR (Create QR Code)** có sẵn ngay trên thanh địa chỉ của trình duyệt **Google Chrome / Microsoft Edge**.
3. Tải ảnh mã QR về, in lên thiệp giấy hoặc gửi vào nhóm lớp để các bạn nữ quét mã bằng điện thoại!
