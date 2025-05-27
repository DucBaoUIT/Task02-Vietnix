<div align="justify">
  
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
- DKIM sử dụng các bản ghi DNS dưới dạng TXT record với định dạng đặc biệt. Khi cặp khóa riêng / chung được tạo, khóa chung được thêm vào DNS của tên miền.
- Ví dụ:

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

# V. ping/hping3 ping đến domain vietnix.vn sau đó giải thích
## 1. ttl= là gì
**Đối với "ping"**
TTL=53 (Time To Live = 53): TTL trong Ping chính là chỉ số Hop (Router, Gateway) biểu thị các thông tin liên quan đến khả năng truyền dữ liệu và phản hồi. Ngoài ra, nó còn giúp ngăn chặn sự trùng lặp các gói ICMP giữa các Host trên Internet khi truyền dẫn. Chỉ số TTL càng cao, chỉ số Hop khi truyền tín hiệu càng bé, thời gian càng thấp, độ trễ được giảm đáng kể, từ đó giúp cho đường truyền ổn định. 
time= 3.16 -> 7.92: Thời gian truyền nhận tín hiệu 

**Đối với hping3**
`hping3 --traceroute -V -1 vietnix.vn0`
Trong đó:
- Tag "-V" là verbose mode
- tag "1" là icmp mode
TTL=0 
time=5.5ms đối với gateway, 26.3ms đối với localhost.

# VI. SSH command
## 1. Dùng password
- Đối với password, người dùng sẽ kết nối bình thường qua cú pháp sau:
`ssh username@ip_server`
- Khi này nếu như là lần đầu nguời dùng kết nối với server thì server sẽ yêu cầu nhập password và Enter

## 2. Dùng key 
- Nếu sử dụng key để kết nối SSH với server, phải đảm báo server đẫ có key xác thực của nguời dùng. Để kết nối qua key, nguời dùng thực hiện câu lệnh:
`ssh -i '/path/to/keyfile' username@ip_server`
- /path/to/keyfile: là đường dẫn tới file key trên máy tính

## 3. Dùng port custom
- Tương tự với câu lệnh dùng password nhưng người dùng cần phải thêm trường "-p" với số port mong muốn. (Giả định port là 2222)
`ssh -p 2222 username@ip_server`

# VII. SCP Command
## 1. SCP 1 file
- Copy 1 file từ máy chủ lên server 
`scp file.txt username@ip_server:/path/to/directory`
- Copy 1 file từ server xuống máy chủ
`scp username@ip_server:/path/to/directory/file.txt "~/path/"`
- SCP 1 file giữa 2 server 
`scp user1@host1.com:/files/file.txt user2@host2.com:/files`

## 2. SCP 1 folder
- Copy 1 folder ta sẽ thêm option -r vào câu lệnh
`scp -r directory username@ip_server:/path/to/directory`
- Đối với folder quá nặng cần nén lại ta sẽ thêm option -C
`scp -C -r directory username@ip_server/com:/path/to/directory`

# VII. RSYNC Command
## 1. rsync file
- Để rsync 1 file vào 1 thư mục, nguwoif dùng thực hiện cú pháp sau 
`rsync options /path/to/source/file.txt /path/to/destination/`
Trogn đó, có các options tùy chọn như: 
-v : verbose
-r : sao chép dữ liệu theo cách đệ quy ( không bảo tồn mốc thời gian và permission trong quá trình truyền dữ liệu)
-a :chế độ lưu trữ cho phép sao chép các tệp đệ quy và giữ các liên kết, quyền sở hữu, nhóm và mốc thời gian
-z : nén dữ liệu
-h : định dạng số

## 2. rsync folder
- Thực hiện tương tự như rsync 1 file, chỉ thay đường dẫn thư mục
`rsync options /path/to/source/folder/ /path/to/destination/folder/`

## 3. rsync increamental
- Có 2 cách để tạo backup rsync increamental. Đối với nâng cao nguwoif dùng sẽ sử dụng bash script, đối với cơ bản người dùng sẽ sử dụng cú pháp sau:
`rsync -av /source/ /backup/`
- Sau khi chạy lệnh này rsync sẽ bỏ qua những file không thay đổi.

# VIII. Cat Command
## 1. Cat nội dung 1 file
- Thực hiện cú pháp:
`cat options /path/to/destination/file.txt`
- Trong đó, options có thể là 
-n để xem số dòng
-T để phân biệt tab và space
-e để hiển thị ký tự cuối dòng
-s để loại bỏ dòng trống dư thừa
-A để kết hợp -e, -T, -V

## 2. Cat dòng thứ <n> trong file
- Để cat đúng 1 dòng được chỉ định duy nhất, ta sẽ sử dụng sed thay vì cat (Giả định cat dòng 5):
`sed -n '5{p;q;}' filename` 

## 3. Cat nhiều dòng vào 1 file bằng EOF
cat <<EOF > filename.txt
Nội dung dòng 1
Nội dung dòng 2
EOF

# IX. Echo command
## 1. Dùng echo để chèn thêm 1 dòng vào cuối file
- Thêm kí tự "\n"
`echo -e 'nVietnix' >> /tmp/file.txt`

## 2. Dùng echo để overwirte nội dung của file
- Sử dụng 1 dấu mũi tên ">"
`echo "foo" > bar.txt`

# X. tail/head command
## 1. tail và tailf
- Tail được sử dụng để hiện thị phần cưới tập tin
`tail options /path/to/file.txt`
Có nhiều options như:
-n: hiển thị số dòng ở dòng cuối
-c: in ra dung lượng file
-f: được sử dụng để phát triển
-v: dữ liệu chỉ định tên file được đi trước 

- Tailf được sử dụng để hiển thị nội dung file trong thời gian thực, thường được sử dụng cho file log 
`tailf /var/log/syslog`

# XI. Sed command
## 1. Dùng sed để find and replace một string trong file
- Để đồng thời find và replace bằng sed:
`sed -i 's/old_s/new_s/g' file.txt`
-i: Chỉnh sửa trực tiếp
s: viết tắt của substitue
g: thay thế tất cả các dòng

# XII. traceroute/tracert command
## 1. Sau khi traceroute xong giải thích chi tiết kết quả trả về
![trace](https://github.com/user-attachments/assets/d2f8a8f6-eb18-465f-82f8-05fd20c4bd6c)
Thực hiện traceroute đến 8.8.8.8 và thu được kết quả như sau:
_gateway (192.168.0.1)	Router trong mạng nội bộ 
localhost (27.71.251.149)	Thiết bị của ISP (Viettel)
10.255.39.249 / 10.255.39.245	Mạng nội bộ của nhà mạng (Viettel)
* * *	Gói tin bị chặn hoặc mất tín hiệu ở hop này
localhost (27.68.237.140 ...)	Các node trung gian khác trong mạng Viettel
dynamic-ip-adsl.viettel.vn ...	Điểm cuối của Viettel trước khi ra mạng quốc tế
72.14.195.97	Router của Google (mạng quốc tế)
* * *	Một router của Google không phản hồi ICMP (bình thường)
dns.google (8.8.8.8)	Mục tiêu cuối: máy chủ DNS của Google

# XIII. Netstat command
## 1. Hiển thị socket đang listen 
`netstat -l`

## 2. Don't resolve hostname
`netstat -n` : chỉ hiển thị IP và port 

## 3. Display process name/PID
`netstat -p`: hiển thị tên tiến trình và PID của tiến trình đang sử dụng socket

## 4. Only show tcp socket
`netstat -t`: Chỉ hiển thị TCP 

## 5. Only show udp socket
'netstat -u`: Chỉ hiển thị UDP

# XIV. Sort command
## 1. Sort theo thứ tự tăng dần
`sort filename`
## 2. Sort theo thứ tự giảm dần
`sort -r filename`
## 3. Sort theo column
`sort -k N filename`
-k N: sort theo cột thứ N. Cột được tính bắt đầu từ 1

# XV. Uniq command
## 1. Lọc ra các dòng lặp lại trong một file
`uniq -d filename`

## 2. Lọc ra các dòng lặp lại trong file và đếm số lượng các dòng lặp lại
`uniq -c filename`

# XVI.  WC command
- Đếm số dòng trong file: `wc -l filename`
- Đếm số kí tự trong file: `wc -l filename`

# XVII. chmod, chown, chattr command
## 1. Phân quyền bằng số, phân quyền bằng chữ
Cách phân quyền bằng số (octal):
Quyền gồm:
Read (r) = 4
Write (w) = 2
Execute (x) = 1
Tổng quyền mỗi nhóm là tổng các giá trị trên.
Ví dụ: `chmod 755 /path/file.txt`

Cách phân quyền bằng chữ: `chmod u=rwx,g=rx,o=rx filename`

## 2. Đổi owner user/group
`chown user:group filename`

## 3. Immutable
`chattr +i filename `: Không thể thay đổi file 
`chattr -i filename` : Có thể thay đổi file

# XVIII. find command
- find các file có đuôi .log: `find /path/-type f -name "*.log"`
- find các folder có tên abc: `find /path/ -type d -name "abc"`
- find các file có tên abc: `find /path/ -type f -name "abc"`
- find các file có tên abc và thực hiện phần quyền read only cho file: `find /path/ -type f -name "abc" -exec chmod 444 {} \;`

# XIX. cp command
- cp file: `cp source_file destination_file`
- cp folder: `cp -r source_folder destination_folder`

# XX. mv command 
## 1. MV file or folder 
`mv source_file/source_folder destination_path`

# XXI. cut command
- Lấy kí tự thứ <n> trong string (Giả định lấy kí tự thứ 3)
`echo "string" | cut -c 3`
- Lấy từ kí tự thứ <n> trở về sau: `echo "abcdef" | cut -c 3- `
- Lấy từ kí tự đầu đến kí tự thứ <n>: `echo "abcdef" | cut -c -3   # output: abc`

# XXII. dig command
- Dùng Dig command để kiểm tra resolv record A, MX, NS
`dig example.com A`
`dig example.com MX`
`dig example.com NS`

- Dùng Dig command để kiểm tra resolv record A, MX, NS với custom DNS
`dig @dns_server example.com A`
`dig @8.8.8.8 example.com MX`
`dig @1.1.1.1 example.com NS`

# XXIII. tar, zip, unzip commands
# 1. Nén/Giải nén file tar.gz
- Nén tar.gz 
`tar -czvf archive_name.tar.gz folder_or_file`
- Giải nén tar.gz:
`tar -xzvf archive_name.tar.gz`
# 2. file zip 
- Nén file/folder zip:
`zip -r archive_name.zip folder_or_file`
- Giải nén zip:
`unzip archive_name.zip`

# XXIV. mount / umount commands
## 1. Thêm ổ cứng /dev/sdb ~ 5GB:
- Định dạng ổ 
sudo mkfs.ext4 /dev/sdb1 
sudo mkdir /mnt/test
- Tạo thư mục mount point
sudo mount /dev/sdb1 /mnt/test

## 2. Kiểm tra có bao nhiêu ổ cứng trên máy chủ:
`lsblk`
`sudo fdisk -l`

## 3. Mount ổ cứng vào /mnt/test:
`sudo mount /dev/sdb1 /mnt/test`

## 4. Unmount /mnt/test:
`sudo umount /mnt/test`

# XXX. Symbolic Links và Hard Links
## Symbolic Link (Symlink):
- Là file đặc biệt chứa đường dẫn đến file hoặc thư mục khác.
- Có thể liên kết file hoặc thư mục nằm trên phân vùng khác.
- Nếu file gốc bị xóa, symlink sẽ bị hỏng (broken link).
## Hard Link:
- Là một đường dẫn tham chiếu trực tiếp đến inode của file.
- Chỉ có thể tạo hard link trong cùng một phân vùng.
- Nếu file gốc bị xóa, dữ liệu vẫn tồn tại nếu hard link còn.

## Ví dụ tạo Symbolic Link:
`ln -s /path/to/original/file /path/to/symlink`

## Ví dụ tạo Hard Link:
`ln /path/to/original/file /path/to/hardlink`

# XXXI. ls command
- Liệt kê danh sách file/thư mục: `ls`
- Liệt kê danh sách file/thư mục và thuộc tính chi tiết: `ls -l`
- Hiện file ẩn (bắt đầu bằng dấu chấm . ): `ls -a`

# XXXII. ps command
- Hiện tiến trình đang chạy: `ps`
- Hiện đầy đủ tiến trình: `ps aux`
- Kill tiến trình (theo PID): `kill PID`
- Kill tiến trình ngay lập tức: `kill -9 PID`

# XXXIII. top command 
- Kiểm tra tài nguyên CPU, RAM đang sử dụng của các process: `top`

![top](https://github.com/user-attachments/assets/e4aa1c8d-c83d-4ec6-8ee7-76138187f142)

- Giải thích một số thông số:
Load average: Trung bình tải hệ thống trong 1, 5, 15 phút. Giá trị càng thấp càng tốt.
us (user): % CPU dùng bởi user process (người dùng).
sy (system): % CPU dùng bởi kernel process (hệ thống).
ni (nice): % CPU dùng bởi tiến trình có độ ưu tiên thay đổi.
id (idle): % CPU không sử dụng.
wa (wait): % CPU chờ I/O.
hi (hardware interrupts): % CPU xử lý ngắt phần cứng.
si (sofware interrupts): % CPU xử lý ngắt phần mềm.
st (steal time): % CPU bị ảo hóa “đánh cắp” (khi chạy trên máy ảo).
Zombie process: tiến trình đã chết nhưng chưa được tiến trình cha thu dọn.
Sleeping process: tiến trình đang chờ tài nguyên hoặc sự kiện.

# XXXIV. free command
- Kiểm tra bộ nhớ RAM: `free -h`
Giải thích:
used: RAM đang được sử dụng.
free: RAM còn trống.
shared: RAM chia sẻ giữa các tiến trình.
buff/cache: RAM dùng để cache, buffer, giúp tăng tốc I/O.
available: RAM khả dụng cho ứng dụng mới.

# XXXV. df command
- Xem dung lượng disk hiện tại: `df -h`

![image](https://github.com/user-attachments/assets/cdc04883-bd19-4a9b-84f0-311824a0a54a)

- Phân vùng / là gì: Dấu / là thư mục gốc (root directory), chứa toàn bộ hệ thống file trên Linux.
Phân vùng / chứa các thư mục hệ thống như /bin, /etc, /home, /usr,...

# XVI. Tài liệu tham khảo
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
11. https://www.ionos.com/digitalguide/server/configuration/linux-scp-command/
</div>
