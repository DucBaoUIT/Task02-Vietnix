# I. SSL
## 1. SSL là gì?
SSL là chứng chỉ kỹ thuật số đảm bảo tính bảo mật, an toàn trong quá trình truyền dữ liệu giữa trình duyệt web và máy chủ.

## 2. Có bao nhiêu cách xác thực SSL
Có 3 cách chính để xác thực SSL:
**Domain Validated SSL (DV SSL)** - Xác thực tên miền: Đây là loại chứng thực đơn giản nhất và dựa vào tên miền. 
*Cách chứng thực:*
- Qua bản ghi DNS (CNAME hoặc TXT)
- Qua tập tin trên webserver
- Qua email tên miền
*Lợi ích:* Nhanh (chỉ mất 5-10 phút để chứng thực), rẻ, phù hợp cho blog cá nhân, website nhỏ.

**Organization Validation SSL (OV SSL)** - Xác thực tổ chức: Loại chứng chỉ SSL dành riêng cho doanh nghiệp/tổ chức và chứng thực dựa vào tính tồn tại của tổ chức/tên miền cần được chứng thực. 
*Cách chứng thực:*
- Kiểm tra tính tồn tại của doanh nghiệp thongo qua xác nhận thông tin doanh nghiệp.
*Lợi ích:* Đáng tin cậy hơn DV SSL và phù hợp với các doanh nghiệp vừa và nhỏ.

**Extended Validation SSL (EV)** - Xác thực mở rộng: Loại chứng chỉ xác thực cao cấp nhất và đáng tin cậy nhất. 
*Cách chứng thực:*
- Tương tự OV SSL nhưng yêu cầu xác thực kỹ lưỡng hơn.
*Lợi ích:* phù hợp với trang thương mại điện tử, website bán hàng cần độ tin cây cao.

## 3. CSR file dùng làm gì trong quá trình tạo SSL
Certificate Request (CSR): chứa thông tin của domain cần chứng chỉ. File này được sử dụng để gửi cho tổ chức cấp phát SSL chứng thực thông tin. Bên cạnh đó, CSR được sử dụng để chứng minh quyền sở hữu private key.
**Thông tin của CSR bao gồm có:**
- Country Name: Điền tên nước (chỉ 2 ký tự).
- State or Province Name: Điền tên tỉnh/thành phố.
- Locality Name: Điền tên thành phố.
- Organization Name: Điền tên tổ chức, công ty bằng tiếng Anh, giống y như trong giấy phép ĐKKD (nếu có).
- Organization Unit name: Điền tên đơn vị tổ chức.
- Common name: Điền vào tên miền chính của chứng chỉ số.

## 4. Sử dụng OpenSSL để gen file CSR sau đó request SSL cho domain tech.training.vietnix.tech
Các bước thực hiện:
1. Bước 1: Cài đặt OpenSSL
`sudo apt-get install openssl`
2. Bước 2: Tiến hành tạo private key và CSR và điền các thông tin cần thiết
`mkdir tech.training.vietnix.tech`
`cd tech.training.vietnix.tech`
`openssl genrsa -out tech.training.vietnix.tech.key 2048`
3. Bước 3: Khởi tạo CSR với input private key vừa tạo
`openssl req -new -key tech.training.vietnix.tech..key -out tech.training.vietnix.tech.csr`

## 5. PEM file là gì
PEM file là một định dạng tệp được sử dụng để lưu trữ và truyền tải các chứng chỉ, khóa riêng tư, và các dữ liệu bảo mật khác trong các hệ thống mã hóa. Các tệp PEM được hóa bằng Base64, cho phép chúng dễ dàng được trao đổi giữa các hệ thống khác nhau

## 6. Private key ssl là gì ?
Private Key SSL là 1 tệp mã hóa được tạo ra cùng lúc với public key đóng vai trò là chìa khóa để máy chủ có thể giải mã được thông tin từ client để bắt đầu một phiên kết nối SSL

## 7. PFX file là gì ? Cách chuyển từ file crt file sang PFX file.
Tệp .pfx là một loại tệp định dạng khóa cá nhân chứng thực (certificate) trong hệ thống Windows. Đây là một loại tệp chứa cả chứng thực số và khóa riêng tư được mã hóa.
Cụ thể, tệp .pfx chứa một chứng chỉ số ký số (SSL/TLS certificate), chứng chỉ được phát hành bởi một cơ quan chứng thực, cùng với khóa riêng tư tương ứng. Thông thường, tệp .pfx được sử dụng để cung cấp thông tin bảo mật cho các kết nối an toàn như HTTPS, SMTPS và các dịch vụ khác.
Domain
**Cách chuyển từ file crt sang PFX**
1. Bước 1: Cài đặt OpenSSL
2. Bước 2: Thực hiện câu lệnh sau:
`openssl pkcs12 -export -out certificate.pfx -inkey privateKey.key -in certificate.crt -certfile CACert.crt`
Trong đó:
Certificate.crt = Your-domain-Name.crt
CACert.crt = NetworkSolutions_CA.crt
certificate.pfx là file mới format

# II. Domain
## 1. Domain là gì 
Domain, hay còn được gọi là tên miền, chính là địa chỉ website của người dùng trên Internet. Thay vì phải nhớ một dãy số IP (Internet Protocol – giao thức internet) phức tạp và khó nhớ, domain cung cấp một địa chỉ dễ đọc, dễ ghi nhớ và dễ dàng chia sẻ.

## 2. Các trạng thái của Domain
Trạng thái tên miền tại Đơn vị Cấp phát tên miền 

| Trạng thái | Ý nghĩa |
| :--- | :--- |
| OK / active | Tên miền hoạt động bình thường sau khi đăng ký |
| addPeriod	| Trạng thái sau khi vừa đăng ký tên miền |
| autoRenewPeriod |	Thời gian tự động gia hạn tên miền |
| inactive | Trạng thái này cho biết tên miền của bạn đã được đăng ký nhưng Name Server chưa thể liên kết với tên miền | 
| pendingCreate | Tên miền đang chờ được đăng ký |
| pendingDelete | Tên miền hết hạn đăng ký và chuẩn bị xóa |
| pendingRenew | Tên miền đang chờ gia hạn |
| pendingRestore | Tên miền đã hết hạn đang chờ về trạng thái khôi phục (Active) |
| pendingTransfer | Tên miền chờ chuyển đổi nhà đăng ký |
| pendingUpdate | Tên miền đang chờ cập nhật |
| redemptionPeriod | Tên miền đã hết hạn và rơi vào trạng thái cần thanh toán phí gia hạn nếu bạn muốn tiếp tục sử dụng |
| renewPeriod | Trạng thái tên miền được gia hạn |
| serverDeleteProhibited | Ngăn tên miền của bạn bị xóa |
| serverHold | Trạng thái tên miền không được kích hoạt trong DNS |
| serverRenewProhibited | Trạng thái tên miền không thể được gia hạn |
| serverTransferProhibited | Trạng thái không cho phép transfer tên miền |
| serverUpdateProhibited | Trạng thái không cho phép cập nhật tên miền |
| transferPeriod | Đây là trạng thái cho phép sau khi transfer tên miền thành thông thì nhà đăng ký mới có thể yêu cầu nhà cung cấp xóa tên miền |

Trạng thái tên miền tại Nhà đăng ký tên miền (Registrar)
| Trạng thái | Ý nghĩa |
| :--- | :--- |
| clientDeleteProhibited | Cấm hủy domain/ Không cho phép xóa tên miền | 
| clientHold | Trạng thái tạm ngừng tên miền (suspend tên miền) |
| clientRenewProhibited | Cấm gia hạn tên miền/ Không cho phép gia hạn tên miền |
| clientTransferProhibited | Trạng thái không cho phép transfer tên miền (Cấm chuyển đổi nhà đăng ký) |
| clientUpdateProhibited | Cấm cập nhật thông tin/ Không cho phép cập nhật thông tin |

## 3. Subdomain là gì
Subdomain là phần mở rộng, phần bổ sung xuất hiện trước của tên miền chính. Subdomain là một phần tách ra từ domain và hoạt động như một website bình thường. Đặc biệt, subdomain có thể được tạo hoàn toàn miễn phí, giảm thiểu đáng kể chi phí đăng ký tên miền mới. Sub domain giúp tạo ra nhiều website trên các lĩnh vực khác nhau thuộc tên miền chính.

## 4. Virtual Hosts là gì
Virtual Hosts là một tính năng trong web server và cũng là một phương thức lưu trữ, cho phép nhiều trang web hoặc tên miền hoạt động trên cùng một máy chủ vật lý hoặc một địa chỉ IP duy nhất. Đây là giải pháp hữu ích giúp tối ưu hóa tài nguyên máy chủ, giảm chi phí vận hành và đơn giản hóa việc quản lý hosting cho nhiều website.

# III. Mail Server
## 1. Tìm hiểu MX Record
*Định nghĩa*
MX Record chỉ định máy chủ thư chịu trách nhiệm chấp nhận thư email thay mặt cho tên miền. Đây là bản ghi tài nguyên trong Hệ thống tên miền (DNS). Có thể cấu hình nhiều bản ghi MX, thường trỏ đến một mảng máy chủ thư để cân bằng tải và dự phòng.
*Cấu trúc*
Cấu trúc của 1 MX Record bao gồm:
Name	    Tên miền 
Type	    MX (loại bản ghi)
Priority	Độ ưu tiên (số càng nhỏ càng ưu tiên cao)
Mail Server	Tên máy chủ mail
*Ví dụ về 1 MX Record*
domain.com.   IN   MX   10 mail1.domain.com.
domain.com.   IN   MX   20 mail2.domain.com.
Khi mail được gửi đến domain.com sẽ được gửi tới mail1.domain.com trước (do priority = 10). Nếu mail1.domain.com không phản hồi, thì gửi đến mail2.domain.com

## 2. Tìm hiểu SPF, DKIM, PTR
**DKIM**
- DKIM là viết tắt của DomainKeys Identified Mail – một phương thức giúp xác nhận Email thông qua chữ ký số giúp tránh email giả mạo. Một kỹ thuật thường được sử dụng trong lừa đảo và spam email.
- DKIM cho phép người nhận kiểm tra xem email được xác nhận từ một tên miền cụ thể có thực sự được chủ sở hữu uy quyền hay không? Nó sẽ gắn chữ ký điện tử, được liên kết với tên miền vào mỗi email gửi đi.
- Các email được ký bằng DKIM dường như hợp pháp hơn đối với người nhận và ít có khả năng chuyển đến các thư mục Rác hoặc Spam. Giả mạo email từ các miền đáng tin cậy là một kỹ thuật phổ biến cho các chiến dịch spam và lừa đảo độc hại. Và DKIM khiến việc giả mạo email từ các miền sử dụng nó trở nên khó khăn hơn.
- DKIM tương thích với cơ sở hạ tầng email hiện có, hoạt động với SPF và DMARC để tạo nhiều lớp bảo mật cho các miền gửi email. Máy chủ thư không hỗ trợ chữ ký DKIM vẫn có thể nhận các thư đã ký mà không gặp bất kỳ sự cố nào. Đó là một giao thức bảo mật tùy chọn và DKIM không phải là một tiêu chuẩn được áp dụng phổ biến
- DKIM sử dụng các bản ghi DNS dưới dạng TXT record với định dạng đặc biệt. Khi cặp khóa riêng / chung được tạo, khóa chung được thêm vào DNS của tên miền. Ví dụ:
`pm._domainkey.domain.com IN TXT “k=rsa\; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDOCTHqIIQhGNISLchxDvv2X8NfkW7MEHGmtawoUgVUb8V1vXhGikCwYNqFR5swP6UCxCutX81B3+5SCDJ3rMYcu3tC/E9hd1phV+cjftSFLeJ+xe+3xwK+V18kM46kBPYvcZ/38USzMBa0XqDYw7LuMGmYf3gA/yJhaexYXa/PYwIDAQAB”`

**SPF**
- Sender Policy Framework (SPF) là một công nghệ xác thực email được sử dụng để ngăn chặn email giả mạo, giúp chủ sở hữu tên miền chỉ định máy chủ email nào được phép gửi email thay mặt cho domain của họ.
Việc triển khai TXT SPF record mang lại nhiều lợi ích như:
- Ngăn chặn thư rác: TXT SPF record kiểm tra nguồn gốc email, ngăn chặn thư giả mạo bằng cách xác minh máy chủ gửi có được ủy quyền hay không. Email từ máy chủ không hợp lệ có thể bị chặn hoặc chuyển vào thư mục spam.
- Tăng cường bảo mật: Bằng cách loại bỏ email giả mạo, TXT SPF record giúp bảo vệ hệ thống email, ngăn chặn các cuộc tấn công và giảm nguy cơ rò rỉ thông tin.
- Nâng cao uy tín: Việc sử dụng TXT SPF record thể hiện sự chuyên nghiệp và đáng tin cậy của tên miền, giúp email dễ dàng đến được hộp thư đến của người nhận.
- Khắc phục sự cố gửi email: Triển khai TXT SPF record đúng cách giúp khắc phục tình trạng email bị từ chối hoặc bị đánh dấu là spam bởi các nhà cung cấp dịch vụ email khác.
- Cải thiện khả năng giao tiếp: TXT SPF record giúp cải thiện khả năng trao đổi email giữa các tên miền, đảm bảo thông tin được truyền tải một cách mượt mà và đáng tin cậy.
- Định dạng của TXT SPF record tuân theo các quy tắc sau:
*Số phiên bản*: Bản ghi SPF luôn bắt đầu với số phiên bản, thường là “v=spf1”. Đây là phiên bản SPF phổ biến nhất hiện nay.
*Quy tắc*: Phần sau “v=spf1” chứa các quy tắc chỉ định máy chủ email được ủy quyền, bao gồm địa chỉ IP, tên miền hoặc các giá trị khác. Chúng được phân tách bằng dấu cách hoặc dấu phẩy. Quy tắc dài có thể được chia thành nhiều dòng bằng cách dùng dấu ngoặc kép (“).
*Tùy chọn*: Bản ghi có thể chứa các tùy chọn như a, mx, ptr, include,… để chỉ định cách xử lý email.
- Ví dụ: v=spf1 a mx ip4:192.0.2.0/24 ~all
TXT SPF record này cho phép gửi mail từ các máy chủ được liệt kê trong bản ghi A và MX của tên miền, cũng như từ bất kỳ địa chỉ IP nào trong dải mạng 192.168.1.0/24. Bất kỳ email nào không khớp với các quy tắc này sẽ được đánh dấu là “softfail” – có thể là spam.

**PTR**
- PTR Record (Point Record , tạm dịch: bản ghi ngược, hay còn được gọi làReverse DNS ) là một bản ghi thực hiện việc chuyển một địa chỉ IP đến tên miền. PTR record giống như một phiên bản ngược của A record: nếu A record trỏ tên miền vào một địa chỉ IP thì PTR Record trỏ một địa chỉ vào một hostname. Tuy nhien cả 2 bản ghi này làm việc hoàn toàn độc lập với nhau.
*Vì sao cần có PTR Record?*
- Tăng độ tin cậy của server: (hỗ trợ cho outgoing mail server)
- PTR Record sẽ cho phép điểm nhận cuối cùng đối chiếu IP của của hostname gửi tới. Đây là một cách hữu hiệu để chống lại hầu hết các hacker sử dụng tên miền giả để spam mail. 
- Đáp ứng yêu cầu reverse DNS lookup trước khi nhận email:
*Quy trình kiểm tra PTR Record* 
- Khi tiếp nhận yêu cầu nhận mail từ 1 địa chỉ IP trên Internet, mail server sẽ tiến hành  kiểm tra IP đó xem host name là gì, Host name đó có nằm trong MX Record của domain của email gởi đến không. Nếu không đúng thì mail bị coi là spam. 

# IV. DNS 
## 1. DNS là gì
DNS viết tắt của Domain Name System có nghĩa là hệ thống phân giải tên miền. DNS là hệ thống cho phép thiết lập tương ứng giữa địa chỉ IP và tên miền trên Internet.

## 2. Các loại record DNS
Hiện nay, DNS có bảy loại bản ghi, bao gồm:
- CNAME Record: Là một bản ghi tên quy chuẩn (Canonical Name Record). Đây là một dạng bản ghi tài nguyên trong hệ thống tên miền.
- A Record: Dùng để trỏ tên miền website tới một địa chỉ IP cụ thể. Đây được xem là bản ghi DNS đơn giản nhất.
- MX Record: Bản ghi này bạn có thể sử dụng để trỏ tên miền đến mail server. MX Record chỉ định server nào quản lý các dịch vụ Email của tên miền đó.
- AAAA Record: Dùng để trỏ tên miền đến địa chỉ IPv6 và cho phép thêm host mới, TTL và IPv6.
- TXT Record: Ngoài ra, có thể thêm giá trị TXT, Host mới, TTL và Point To để chứa các thông tin định dạng văn bản domain.
- SRV Record: Đây là bản ghi DNS đặc biệt, dùng để xác định chính xác dịch vụ nào đang chạy Port nào. Và thông qua bản ghi này bạn có thể thêm Priority, Port, Weight, TTL, Point to Point.
- NS Record: Bản ghi này có thể chỉ định Name Server cho từng tên miền phụ và bên cạnh đó có thể tạo tên Name Server, TTL hay host mới.

## 3. Nguyên tắc làm việc của DNS
- Người dùng yêu cầu truy cập một tên miền: Khi người dùng nhập một tên miền như example.com vào trình duyệt web, thiết bị của họ gửi yêu cầu tìm giải quyết tên miền đó đến máy chủ DNS cục bộ.

- Truy vấn đến máy chủ DNS cục bộ (Local Name Server): Máy chủ DNS cục bộ nhận yêu cầu từ thiết bị của người dùng và bắt đầu quá trình tìm giải quyết tên miền bằng cách tìm thông tin trong bộ nhớ cache của mình.

- Truy vấn đến các máy chủ DNS uy quyền (Authoritative DNS Servers): Nếu thông tin không được tìm thấy trong bộ nhớ cache của máy chủ cục bộ, nó sẽ gửi truy vấn đến máy chủ DNS uy quyền chứa thông tin chính xác về tên miền được yêu cầu.

- Máy chủ DNS uy quyền trả về thông tin: Máy chủ DNS uy quyền sẽ trả về địa chỉ IP tương ứng với tên miền được yêu cầu cho máy chủ DNS cục bộ.

## 4. Cách phân giải địa chỉ DNS
- Khi người dùng truy cập một website, máy tính sẽ gửi yêu cầu đến máy chủ DNS cục bộ để tìm địa chỉ IP của website đó. Máy chủ DNS cục bộ sẽ kiểm tra cơ sở dữ liệu của mình xem có chứa địa chỉ IP của website hay không. Nếu có, sẽ trả về địa chỉ IP cho máy tính của người dùng.
- Quá trình phân giải DNS bao gồm chuyển đổi tên máy chủ (chẳng hạn như www.example.com) thành địa chỉ IP thân thiện với máy tính (chẳng hạn như 192.168.1.1). Một địa chỉ IP được cung cấp cho mỗi thiết bị trên Internet và địa chỉ đó là cần thiết để tìm thiết bị Internet phù hợp. Giống như một địa chỉ đường phố được sử dụng để tìm một ngôi nhà cụ thể.
- Khi người dùng muốn tải một trang web, một bản dịch phải xảy ra giữa những gì người dùng nhập vào trình duyệt web của họ (example.com) và địa chỉ thân thiện với máy cần thiết để định vị trang web example.com.
- Nếu máy chủ DNS cục bộ không có địa chỉ IP của website, nó sẽ hỏi máy chủ DNS gốc. Máy chủ DNS gốc sẽ trả về địa chỉ IP của máy chủ DNS cấp cao nhất cho website.
- Máy chủ DNS cấp cao nhất sẽ trả về địa chỉ IP của máy chủ DNS quản lý website. Máy chủ DNS quản lý sẽ trả về địa chỉ IP của trang web cho máy chủ DNS cục bộ.
- Cuối cùng, máy chủ DNS cục bộ sẽ trả về địa chỉ IP của trang web cho máy tính của người dùng. Máy tính của người dùng sẽ sử dụng địa chỉ IP này để kết nối với website.

# V. Tài liệu tham khảo
1. https://azdigi.com/blog/huong-dan/chung-chi-ssl/chung-chi-ssl-la-gi-va-co-bao-nhieu-loai/
2. https://kb.pavietnam.vn/csr-la-gi-1-so-thong-tin-trong-csr.html
3. https://vietnix.vn/tao-csr-de-dang-ky-ssl/
4. https://kb.pavietnam.vn/huong-dan-tao-file-pfx-cho-chung-chi-ssl.html
5. https://vietnix.vn/cac-trang-thai-ten-mien-domain-status-code/
6. https://vietnix.vn/subdomain-la-gi
7. https://vietnix.vn/virtual-hosts/
8. https://stackoverflow.com/questions/9971464/how-to-convert-crt-cetificate-file-to-pfx
9. https://vietnix.vn/dkim-la-gi/
10. https://vietnix.vn/tao-txt-spf-record/#cach-tao-txt-spf-record-nhanh-chong
