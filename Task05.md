# 1. Allow port: Thực hiện allow port 33006 bằng GUI 
Vào Windows Firewall with Advanced Security -> Inbound Rule -> New Rule -> Port-> Chọn giao thức (TCP, UDP) -> chọn Port tương ứng (33006) -> Allow Connection -> Chọn các mục trường "Rule Apply" -> Điền tên rule (TestAllowPort) -> Kết thúc 
Ảnh 

# 2. Allow IP 
Vào Inbound Rule -> Custom -> Chọn Program -> Chọn Protocol -> Chọn IP và các cùng IP tương ứng tại mục Scope -> Allow Connection -> Chọn Profile -> Đặt tên -> kết thúc 
Ảnh 

# 3. Block IP và Port
Thực hiện tương tự allow -> Chỉ thay trường Allow Connection thành Block Connection

Ảnh 

# 4. IP và Port cụ thể (Cho phép IP 192.168.0.121 truy cập vào port 30302)
Sử dụng tương tự Custom -> Tại mục Port chọn type và port tại Local Port (30302) -> Scope chọn IP tại mục Remote IP Address (192.168.0.121) -> Action (Allow Connection).
Ảnh 

# 5. Cài đặt IIS và WordPress
- Thực hiện cài đặt IIS tại Server Manager -> Tạo site mới với folder mới để cài WordPress
Ảnh 

- Thêm chứng chỉ SSL bằng cách gộp các file vào file *.pfx qua OpenSSL
`openssl pkcs12 -macalg SHA1 -keypbe PBE-SHA1-3DES -certpbe PBE-SHA1-3DES -export -out website.pfx -inkey private.key -in certificate.crt -certfile ca_bundle.crt`

- Sau đó, vào Server Manager -> Import file tương ứng -> Vào website -> Chỉnh sửa binding (thêm https) và truy cập
Ảnh 
Ảnh 

# 6. SQL 
Cài đặt Microsoft SQL 2016 và Microsoft SQL Server Management tương ứng
Ảnh 
