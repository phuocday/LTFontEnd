import Home from "../Components/home";
function GioHang()
{
    return(
        <>
        <Home/>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">DANH SÁCH SẢN PHẨM</h1>
    <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
            <a href="thanhtoan" class="btn btn-sm btn-outline-secondary" >Thanh Toán</a>
        </div>
    </div>
    </div>
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Tên Sản Phẩm</th>
                        <th>Hình Ảnh</th>
                        <th>Giá Bán</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th>Chỉnh sửa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nike</td>
                        <td><img className="anhTest" src="nike1.jpg"/></td>
                        <td>100000VND</td>
                        <td>1</td>
                        <td>100000VND</td>
                        <td>
                            <a href="#">Sửa</a>
                            <a href="#">Xóa</a>
                        </td>
                    </tr>
                </tbody>
        </table>
        </div>
        </>
    )
}
export default GioHang;