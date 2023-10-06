function SanPham(props){
    return(
            <div className="san-pham col-md-4">
                <img className="img" src={props.data.hinh_anh}/>
                <p>{props.data.ten}</p>
                <p>{props.data.gia}</p>
                <button className="btn btn-outline-dark" type="submit">Chon mua</button>
            </div>  
    )
}
export default SanPham;