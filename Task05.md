# 1. Allow port: Thực hiện allow port 33006 bằng GUI 
Vào Windows Firewall with Advanced Security -> Inbound Rule -> New Rule -> Port-> Chọn giao thức (TCP, UDP) -> chọn Port tương ứng (33006) -> Allow Connection -> Chọn các mục trường "Rule Apply" -> Điền tên rule (TestAllowPort) -> Kết thúc 

![AllowPort](https://github.com/user-attachments/assets/4fc7b4c6-096d-4f13-9d6f-c82631a17604)

# 2. Allow IP 
Vào Inbound Rule -> Custom -> Chọn Program -> Chọn Protocol -> Chọn IP và các cùng IP tương ứng tại mục Scope -> Allow Connection -> Chọn Profile -> Đặt tên -> kết thúc 

![AllowIP](https://github.com/user-attachments/assets/36b686fa-c89c-4a9b-bb0e-df44677f7f45)

# 3. Block IP và Port
Thực hiện tương tự allow -> Chỉ thay trường Allow Connection thành Block Connection

![BlockIP](https://github.com/user-attachments/assets/90572df5-08fa-4724-a170-e70552c15191)

# 4. IP và Port cụ thể (Cho phép IP 192.168.0.121 truy cập vào port 30302)
Sử dụng tương tự Custom -> Tại mục Port chọn type và port tại Local Port (30302) -> Scope chọn IP tại mục Remote IP Address (192.168.0.121) -> Action (Allow Connection).

![SpecificIP](https://github.com/user-attachments/assets/46957ded-f2bb-4eeb-b862-828ce334b6c1)

# 5. Cài đặt IIS và WordPress
- Thực hiện cài đặt IIS tại Server Manager -> Tạo site mới với folder mới để cài WordPress

![WPfolderxIIS](https://github.com/user-attachments/assets/c12a09b8-e016-4331-96d5-c4c4637bd997)

- Thêm chứng chỉ SSL bằng cách gộp các file vào file *.pfx qua OpenSSL

`openssl pkcs12 -macalg SHA1 -keypbe PBE-SHA1-3DES -certpbe PBE-SHA1-3DES -export -out website.pfx -inkey private.key -in certificate.crt -certfile ca_bundle.crt`

- Sau đó, vào Server Manager -> Import file tương ứng -> Vào website -> Chỉnh sửa binding (thêm https) và truy cập

![wp](https://github.com/user-attachments/assets/b80965dc-bd0a-46fd-8aee-86000f73de81)

# 6. SQL 
Cài đặt Microsoft SQL 2016 và Microsoft SQL Server Management tương ứng

![SQL](https://github.com/user-attachments/assets/768df29a-8538-46fe-8add-d2dc277b675a)

