Đồ án cuối khóa FrontEnd LIKELION_SHINHAN
Tên: Võ Thành Phát
Tên project: trang web quản lý người dùng và sản phẩm
Sơ lược về project:
	. Công nghệ sử dụng:
			+ FrontEnd: ReactJS
			+ BackEnd: MongoDB
	. Các chức năng của trang web:
			+Đăng nhập và đăng ký
			+Phân quyền: Admin & User.
			+Thao tác trên web: List danh sách User theo dạng lưới (phân trang: 100 user thì mỗi 1 trang sẽ chứa từ 5 ~ 10 user)
			+Admin có thể thực hiện lệnh xoá trực tiếp trên danh sách.
			+Quyền xoá chỉ có mỗi admin được phép thực thi.
			+User khi tạo được thêm trực tiếp vào danh sách.
			+User có thể thực thi lệnh Modify cho chính user đó.
			+Quyền modify chỉ có mỗi user được phép thực thi.
			+Chỉ có user được phép xóa chính bản thân mình
			+Trang dashboard: .liệt kê các thông tin tổng quát như: số lượng người dùng, tổng sản phẩm hiện có trên hệ thống
						.2 bảng thông kê dạng cột và dạng đường hiển thị số lượng người dùng tham gia trang web
			+Trang usertable: .liệt kê danh sách người dùng hiện có với các thông tin như 
						( tên, email, vai trò, ngày tạo, action: xóa sửa) tùy vào admin hoặc user mà có các function khác nhau
			+Trang product(chỉ admin có thể truy cập được trang này): hiển thị danh sách sản phẩm có trong hệ thống và có thể xem chi 			tiết sản phẩm
			+Trang profile: Hiển thị thông tin người dùng

