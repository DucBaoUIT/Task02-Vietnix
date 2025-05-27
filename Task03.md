# I. Cài đặt AAPanel và cài đặt WordPress/Laravel
## 1. Cài đặt AAPanel 
- Thực hiện lệnh sau để cài đặt AAPanel vào Linux
`wget -O install.sh http://www.aapanel.com/script/install-ubuntu_6.0_en.sh`
`bash install.sh`

- Sau khi cài đặt sẽ nhận được URL để truy cập vào AAPanel.
Ảnh 

## 2. Thực hiện tải WordPress từ AAPanel
*Cài đặt bằng WP-Toolkit*
- Vào WP-Toolkit -> Add và ddienf thoogn tin trang WordPress cần cấu hình 

*Cài đặt bằng one-click*
- Vào mục "App Store" -> Tìm kiếm "One-Click Deployment" -> Install
- Sau đó vào setting của plugin vừa cài đặt -> Chọn WordPress và cấu hình các thông tin cần thiết 
Ảnh 

Sau khi hoàn thành cài đặt thực hiện login vào website
Ảnh

## 3. Cài đặt Laravel mặc định từ AAPanel
- Tạo 1 project Laravel với các file mặc định
- Cài đặt dự án và nén
`composer create-project laravel/laravel task03_laravel`
- Giải nén tại khu quản lý file của website (Vào File -> Chọn Folder )
Ảnh 
- Vào server -> tiến hành trỏ vào thư mục của Laravel -> Thực hiện lệnh sau 
`composer install`
- Chạy Website và xem hiển thị 
Ảnh 

# II. Tìm hiểu cách sử dụng Plugin All-in-One WP Migration and Backup 
Plugin giúp cho người dùng di chuyển website một cách nhanh chóng. Plugin giúp người dùng chuyển toàn bộ dữ liệu (bao gồm database, file media, plugin, theme,…) sang hosting mới một cách tự động. Plugin cũng sẽ sửa chữa tất cả các sự cố có thể xảy ra trong quá trình chuyển đổi.

**Cách sử dụng**
Sao lưu dữ liệu website WordPress cũ
Truy cập vào quản trị admin website WordPress để bắt đầu sao chép (backup) dữ liệu.
Vào Plugin -> Chọn export site to file -> Tiến hành tải về 
Ảnh 
Để đưa file và cài đặt WordPress đó vào, tiến hành vào mục Import và tải file lên để có được WP hoàn toàn mới.
Ảnh 

# III. Cài đặt các plugin yêu cầu
Để tải mới các plugin, vào WordPress-> Add Plugin -> Upload file zip -> Install 
Thực hiện tải tương tự với tất cả plugin được yêu cầu, ta thu được danh sách plugin sau:
ảnh

# IV. - 2 Plugin sau cần tìm hiểu mục đích sử dụng và trường hợp khi nào có thể cài Litespeed Cache
## 1. WP-Optimize – Cache
Plugin WP-Optimize là 1 plugin tăng tốc cho WordPress với khả năng tối ưu hóa Database. Plugin này cho phép nguời dùng xóa trong thùng rác (các bài viết đã chuyển vào thùng rác, bài viết spam, bản sửa đổi post, quá trình chuyển tiếp) và tối ưu hóa các bảng database. Bên cạnh đó, WP-Optimize cho phép xem các bảng database riêng lẻ và xóa các bảng bị bỏ bởi các plugin tăng tốc WordPress cũ (hoặc chưa được cài đặt). 
Plugin còn tạo bộ nhớ đệm (caching): Cung cấp tính năng cache cho WordPress (giống như nhiều plugin khác như W3 Total Cache, WP Super Cache).

## 2. Litespeed Cache
LiteSpeed Cache (hay LSCache) là một giải pháp bộ nhớ đệm chuyên dụng cho website chạy trên nền tảng Web Server LiteSpeed – một trong những web server tốt nhất hiện nay. So sánh với các đối thủ như Apache hay Nginx, LiteSpeed vượt trội hơn về tốc độ load, khả năng chịu tải cũng như xử lý dữ liệu.
Việc tích hợp plugin LSCache vào LiteSpeed giúp gia tăng thêm tốc độ load web nhằm nâng cao hiệu suất hoạt động vượt trội so với những webserver khác trên thị trường. Đó cũng là lý do mà plugin này được nhiều webmaster ưa chuộng và sử dụng ở thời điểm hiện tại.

## 3. Trường hớp có thể cài LiteSpeed Cache
Có các trường hợp sau có thể sử dụng LiteSpeed Cache 
- Khi máy chủ đang chạy LiteSpeed/OpenLiteSpeed.
- Khi muốn tận dụng tối đa hiệu năng nhờ cache cấp máy chủ thay vì chỉ là cache qua PHP.
- Khi dùng dịch vụ hosting có hỗ trợ sẵn LiteSpeed (nhiều hosting cPanel hiện nay dùng LiteSpeed).
- Khi cần hiệu năng cao cho website có lượng truy cập lớn
