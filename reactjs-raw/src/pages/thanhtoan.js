import Home from "../Components/home";
function ThanhToan()
{
    return(
        <>
        <Home/>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nike</td>
                        <td><img className="anhTest" src="nike1.jpg"/></td>
                        <td>100000VND</td>
                        <td>1</td>
                        <td>100000VND</td>
                    </tr>
                </tbody>
        </table>
        </div>
        <div class="row">
                 <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h3 class="h4 ">Thông tin người nhận</h3>
                    <div className="col-md-0">
                        <label>Họ tên:</label>
                        <input type="text"></input>
                    </div>
                    <div className="col-md-0">
                        <label>Số ĐT:</label>
                        <input type="text"></input>
                    </div>
                    <div className="col-md-0">
                        <label>Địa chỉ:</label>
                        <input type="text"></input>
                    </div>
                 </div>
                 <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h3 class="h4 ">Phương thức thanh toán</h3>
                    <div class="btn-group me-2">
                        <a href="" class="btn btn-lg btn-outline-secondary" >COD</a>
                    </div>
                    <div className="col-md-0">
                    <div class="btn-group me-2">
                        <a href="" class="btn btn-lg btn-outline-secondary" >internet Banking</a>
                    </div>
                    </div>
                   
                 </div>
        </div>
        <br></br>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <div class="btn-group me-2">
                    <label>Tổng tiền:</label>
                    <input type="text"></input>            
            </div>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                    <a href="thanhtoan" class="btn btn-lg btn-outline-secondary" >Thanh Toán</a>
                </div>
            </div>
        </div>
        </>
    )
}
export default ThanhToan;