import Content from "../Components/content";
import Home from "../Components/home";
import LoaiSanPham from "../Components/loaisanpham";
function SanPham(){
    // const dsLoaiSanPham=[
    //     {
    //       'ten':'Nike',
    //       'ds_san_pham':[
    //         {
    //           'hinh_anh':'nike.webp',
    //           'ten':'Nike Low',
    //           'gia':10000
    //         },
    //         {
    //           'hinh_anh':'nike1.jpg',
    //           'ten':'Nike High',
    //           'gia':20000
    //         }
    //       ]
    //     },
    //     {
    //       'ten':'Bitis',
    //       'ds_san_pham':[
    //         {
    //           'hinh_anh':'bistis.jpg',
    //           'ten':'Bitis 1',
    //           'gia':40000
    //         },
    //         {
    //           'hinh_anh':'bitis1.jpg',
    //           'ten':'Bitis 2',
    //           'gia':50000
    //         }
    //       ]
    //     }
    //   ];
    //   const listLoaiSanPhams=dsLoaiSanPham.map(function(item)
    //   {
    //     return(
    //       <LoaiSanPham data={item}/>
    //     );
    //   });
    return(
        <>
            <Home/>
            <Content/>
        </>
    );
}
export default SanPham;