# I. Xây dựng reverse proxy 
## 1. Apache
- Trước tiên, ta sẽ đổi port lắng nghe của Apache để tránh xung đột với nginx (Sử dụng 2 port 8080 cho HTTP và 8443 cho HTTPS)
`echo -e "Listen 8080\nListen 8443" | sudo tee -a /etc/apache2/ports.conf`

FastCGI là phiên bản kế tiếp của CGI, ít tốn tài nguyên CPU và cho tốc độ tải trang php cao, với điều kiện cần một lượng RAM đủ lớn. FastCGI cho phép máy chủ xử lý được nhiều web page hơn tại cùng một thời điểm. PHP-FPM giúp quản lý tiến trình PHP FastCGI
- Thực hiện cài đặt cấu hình Apache để sử dụng PHP_FPM. Trước tiên cần phải bật "Mod Actions"
`a2enmod actions`
- Tiến hành thay đổi tên file cấu hình mặc định và tạo file config mới cho FastCGI
`sudo mv /etc/apache2/mods-enabled/fastcgi.conf /etc/apache2/mods-enabled/fastcgi.conf.default`

![image](https://github.com/user-attachments/assets/c6c9cfa4-1dba-4fe8-9452-e8217560520c)

- Thực hiện cấu hình Virtual Host cho 2 website

**WordPress**
  
![image](https://github.com/user-attachments/assets/88a91e23-b69d-4544-96f4-7554c3a4aea2)

**Laravel**

![image](https://github.com/user-attachments/assets/660c5162-cda2-4123-90ba-cc62293b24e9)

- Bật các site và Reload lại Apache2
`a2ensite website`

`systemctl reload apache2`

## 2. InfoPHP
Tạo file phpinfo() cho từng trang web để có thể kiểm tra xem PHP có được cấu hình đúng hay không:
`echo "<?php phpinfo(); ?>" | sudo tee /var/www/wp.bao.vietnix.tech/info.php`

`echo "<?php phpinfo(); ?>" | sudo tee /var/www/laravel.bao.vietnix.tech/info.php`

Truy cập vào các trang web để xem thoogn tin php:
1. laravel.bao.vietnix.tech/info.php
2. wp.bao.vietnix.tech/info.php

## 3. Cấu hình Nginx
*Cấu hình Nginx làm Reverse Proxy*
Khi Nginx chuyển tiếp các yêu cầu cho các tên miền của Apache, Apache sẽ gửi mọi yêu cầu file cho tên miền đó đến Apache. Nginx hoạt động nhanh hơn Apache trong việc phục vụ các static files như hình ảnh, JavaScript và Stylesheets. Vì vậy, hãy cấu hình file virtual server apache của Nginx để phục vụ các static files một cách trực tiếp, nhưng gửi các yêu cầu PHP cho Apache xử lý.
-> Thêm các mục location cần thiết 
 
**WordPress**

![image](https://github.com/user-attachments/assets/9bcf4936-6f1a-44b1-80fe-0257a3be6599)

**Laravel**

![image](https://github.com/user-attachments/assets/04b2592f-e300-4b7f-b237-2ecba5a37a3f)

- Kích hoạt website và restart lại nginx và chạy các web site
1. http://laravel.bao.vietnix.tech
2. https://laravel.bao.vietnix.tech
3. http://wp.bao.vietnix.tech
4. https://wp.bao.vietnix.tech

## 4. Cấu hình mod_rpaf
Module này sẽ viết lại các giá trị của REMOTE_ADDR, HTTPS và HTTP_PORT dựa trên các giá trị được cung cấp bởi một reverse proxy.
Nếu không có module này, một số ứng dụng PHP sẽ yêu cầu thay đổi mã để có thể hoạt động ngầm mượt mà phía sau proxy.
Thực hiện cài đặt như sau:
1. `wget https://github.com/gnif/mod_rpaf/archive/stable.zip`
2. `unzip stable.zip`
3. `cd mod_rpaf-stable`
4. `make`
5. `sudo make install`

Tiếp theo, cấu hình file rpaf.conf và rpaf.load để phù hợp với thông tin máy chủ
Cuối cùng vào domain/info.php và kiểm tra trường IP "REMOTE_ADDR" để thấy được IP công khai của máy tính

![image](https://github.com/user-attachments/assets/99332f53-93be-4e75-8175-28e8d54452c1)

## 5. Tại sao Nginx đứng trước Apache
- Nginx có thể được đặt trước Apache dưới dạng proxy ngược. Điều này tận dụng tốc độ xử lý nhanh của Nginx để xử lý tất cả các yêu cầu từ người dùng. Đối với nội dung động, chẳng hạn như các tệp PHP, Nginx cung cấp yêu cầu cho Apache, xử lý kết quả và trả về trang được hiển thị. Dẫn đến việc Nginx đứng trước giúp giảm tải rất lớn cho Apache.
- Nginx có hệ thống reverse proxy/load balancer với cấu hình đơn giản, dễ mở rộng giú Nginx dễ dàng giao tiếp với nhiều Backend khác nhau (WordPress, Laravel)
- Nginx hỗ trợ cấu hình SSL mạnh mẽ, dễ dàng tích hợp tốt với Let’s Encrypt và nhiều định dạng SSL khác nhau, xử lý TLS nhanh và ổn định hơn.

# II. MySQL và phpMyAdmin
## 1. MySQL
- Sau khi upload source code vào thư mục của các website cần phải tạo các Database tương ứng để chạy. Thực hiện tạo 2 database theo mẫu sau:

`mysql -u root -p`

`CREATE USER 'name'@'host' IDENTIFIED BY 'pass';`

`GRANT ALL PRIVILEGES ON table.* TO 'name'@'host';`

`FLUSH PRIVILEGES;`

*Remote MySQL*
- Chỉnh sửa bind-address thành "0.0.0.0"
- Tạo user như sau:
`CREATE USER 'root'@'%' IDENTIFIED BY 'pass';`

`GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';`

`FLUSH PRIVILEGES;`
## 2. phpMyAdmin
Thực hiện alias trong apache 
`sudo ln -s /usr/share/phpmyadmin /var/www/directory`
Hoặc alias trực tiếp bằng cách thêm dòng sau vào file cấu hình apache
`Alias /phpmyadmin /usr/share/phpmyadmin`
- Truy cập vào phpMyAdmin của các website và nhập user password tương ứng

**WordPress**

![phpmyadmwwp](https://github.com/user-attachments/assets/042f976b-2f45-457c-9daf-79fa92a61c14)

**Laravel**

![laravelphpmyadm](https://github.com/user-attachments/assets/963dd4dd-de6d-4825-8dbb-a78c5d3d8fd7)

# III. Thử nghiệm
## 1. Tắt thử Apache và chạy Website
Thực hiện tắt Apache và truy cập các trang web

![image](https://github.com/user-attachments/assets/e8d3657d-92e9-41b0-8214-fe17518eb13c)

=> Từ đó có thể thấy rằng việc tắt đi Apache khiến cho Nginx không thể xử lý các file động (.php) vì:
- Nginx trong mô hình này chỉ làm reverse proxy, không xử lý PHP trực tiếp.
- Nó chuyển tiếp request (thực hiện proxy-pass) sang Apache (port 8080/8443) nơi có mod_php và PHP interpreter.

## 2. Tắt Nginx và chạy website
Thực hiện tăt Nginx và truy cập 

![image](https://github.com/user-attachments/assets/e0e61140-083f-4488-8b4c-43047099dc36)


=> Apache vẫn xử lý bình thường, bao gồm:
- Render file PHP (WordPress, Laravel)
- Trả file tĩnh (JS, CSS, ảnh)
- Apache vẫn hoạt động bình thường nếu Nginx bị tắt, vì nó trực tiếp xử lý các request và có module PHP chạy sẵn.

