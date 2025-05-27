# I. Cài đặt AAPanel và cài đặt WordPress/Laravel
## 1. Cài đặt AAPanel 
- Thực hiện lệnh sau để cài đặt AAPanel vào Linux
`wget -O install.sh http://www.aapanel.com/script/install-ubuntu_6.0_en.sh`
`bash install.sh`

- Sau khi cài đặt sẽ nhận được URL để truy cập vào AAPanel.

 <div align="center">

 ![AAPanel_Login](https://github.com/user-attachments/assets/609c8f44-0af4-4609-9ef5-b33ee5fc954a)

 </div>
## 2. Thực hiện tải WordPress từ AAPanel
*Cài đặt bằng WP-Toolkit*
- Vào WP-Toolkit -> Add và ddienf thoogn tin trang WordPress cần cấu hình 

*Cài đặt bằng one-click*
- Vào mục "App Store" -> Tìm kiếm "One-Click Deployment" -> Install
- Sau đó vào setting của plugin vừa cài đặt -> Chọn WordPress và cấu hình các thông tin cần thiết 
Sau khi hoàn thành cài đặt thực hiện login vào website

<div align="center">

![WP_login](https://github.com/user-attachments/assets/e22f551c-ebd5-4e9b-b6e6-5078f654a858)

</div>

## 3. Cài đặt Laravel mặc định từ AAPanel
- Tạo 1 project Laravel với các file mặc định
- Cài đặt dự án và nén
`composer create-project laravel/laravel task03_laravel`
- Giải nén tại khu quản lý file của website (Vào File -> Chọn Folder )

<div align="center">

![Giainen](https://github.com/user-attachments/assets/226c38d1-c73e-47ae-bfdd-6fe0ef8af8e7)
  
</div>
- Vào server -> tiến hành trỏ vào thư mục của Laravel -> Thực hiện lệnh sau 
`composer install`
- Sau đó, tạo application key qua lệnh : `php artisan key:generate`
- Cấp quyền cho các file cần thiết 
`chmod -R 775 storage`
`chmod -R 775 bootstrap/cache`
- Chạy Website và xem hiển thị 

<div align="center">

![image](https://github.com/user-attachments/assets/4b6ae7e8-8989-484f-9914-ef97f99d1cfb)

</div>

# II. Tìm hiểu cách sử dụng Plugin All-in-One WP Migration and Backup 
Plugin giúp cho người dùng di chuyển website một cách nhanh chóng. Plugin giúp người dùng chuyển toàn bộ dữ liệu (bao gồm database, file media, plugin, theme,…) sang hosting mới một cách tự động. Plugin cũng sẽ sửa chữa tất cả các sự cố có thể xảy ra trong quá trình chuyển đổi.

**Cách sử dụng**
Sao lưu dữ liệu website WordPress cũ
Truy cập vào quản trị admin website WordPress để bắt đầu sao chép (backup) dữ liệu.
Vào Plugin -> Chọn export site to file -> Tiến hành tải về 

<div align="center">
  
  ![ExPortFile](https://github.com/user-attachments/assets/1f599e97-d6fb-4d84-97d8-5fa2b6a4753d)

</div>

Để đưa file và cài đặt WordPress đó vào, tiến hành vào mục Import và tải file lên để có được WP hoàn toàn mới.

<div align="center">
  
![Import](https://github.com/user-attachments/assets/60bfa30d-6cb4-4405-b13b-7892d3881abc)

</div>

# III. Cài đặt các plugin yêu cầu
Để tải mới các plugin, vào WordPress-> Add Plugin -> Upload file zip -> Install 
Thực hiện tải tương tự với tất cả plugin được yêu cầu, ta thu được danh sách plugin sau:

<div align="center">
  
![Allplugins](https://github.com/user-attachments/assets/b090b0bc-3c58-47b0-a4ea-ec947d6318b6)

</div>

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
