import Home from "../Components/home";
import Content from "../Components/content";
import Footer from "../Components/footer";
import Banner from "../Components/banner";
function TrangChu(){
    return(
        <>
            <Home/>
            <Banner/>
            <a href="sanpham" id="all_sp" >Tất cả sản phẩm</a>
            <Content/>
            <Footer/>
        </>
    );
}
export default TrangChu;