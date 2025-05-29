# I. Xây dựng reverse proxy 
## 1. Apache
- Trước tiên, ta sẽ đổi port lắng nghe của Apache để tránh xung đột với nginx (Sử dụng 2 port 8080 và 8081 để tránh xung đột)
'echo -e "Listen 8080\nListen 8081" | sudo tee -a /etc/apache2/ports.conf'
- Thực hiện cấu hình Virtual Host cho 2 website
**WordPress**
Ảnh
**Laravel**
Ảnh
- Bật các site và Reload lại Apache2
'a2ensite website'
'systemctl reload apache2'
**InfoPHP**
Tạo file phpinfo() cho từng trang web để có thể kiểm tra xem PHP có được cấu hình đúng hay không:
'echo "<?php phpinfo(); ?>" | sudo tee /var/www/wp.bao.vietnix.tech/info.php'
'echo "<?php phpinfo(); ?>" | sudo tee /var/www/laravel.bao.vietnix.tech/info.php'

## 2. Cấu hình Nginx
Cấu hình Nginx làm Reverse Proxy
**WordPress**
Ảnh
**Laravel**
Ảnh
- Kích hoạt website và restart lại nginx và chạy các web site
1. http://laravel.bao.vietnix.tech
2. https://laravel.bao.vietnix.tech
3. http://wp.bao.vietnix.tech
4. https://wp.bao.vietnix.tech
# II. MySQL và phpMyAdmin
## 1. MySQL
- Sau khi upload source code vào thư mục của các website cần phải tạo các Database tương ứng để chạy. Thực hiện tạo 2 database theo mẫu sau:
'mysql -u root -p'
'CREATE USER 'name'@'host' IDENTIFIED BY 'pass';'
'GRANT ALL PRIVILEGES ON table.* TO 'name'@'host';'
'FLUSH PRIVILEGES;'
*Remote MySQL*
- Chỉnh sửa bind-address thành "0.0.0.0"
- Tạo user như sau:
'CREATE USER 'root'@'%' IDENTIFIED BY 'pass';'
'GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';'
'FLUSH PRIVILEGES;'
## 2. phpMyAdmin
Thực hiện alias trong apache 
'sudo ln -s /usr/share/phpmyadmin /var/www/directory'
Hoặc alias trực tiếp bằng cách thêm dòng sau vào file cấu hình apache
'Alias /phpmyadmin /usr/share/phpmyadmin'
- Truy cập vào phpMyAdmin của các website và nhập user password tương ứng 
**WordPress**
Ảnh
**Laravel**
Ảnh
