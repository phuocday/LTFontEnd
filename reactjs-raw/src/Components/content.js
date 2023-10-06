import LoaiSanPham from "../Components/loaisanpham";
function Content(){
    const dsLoaiSanPham=[
        {
          'ten':'Nike',
          'ds_san_pham':[
            {
              'hinh_anh':'nike.webp',
              'ten':'Nike Low',
              'gia':10000
            },
            {
              'hinh_anh':'nike1.jpg',
              'ten':'Nike High',
              'gia':20000
            },
            {
              'hinh_anh':'nike3.jpg',
              'ten':'Nike High',
              'gia':400000
            }
          ]
        },
        {
          'ten':'Bitis',
          'ds_san_pham':[
            {
              'hinh_anh':'bistis.jpg',
              'ten':'Bitis 1',
              'gia':40000
            },
            {
              'hinh_anh':'bitis1.jpg',
              'ten':'Bitis 2',
              'gia':50000
            },
            {
              'hinh_anh':'bitis3.jpg',
              'ten':'Bitis Hunter X',
              'gia':50000
            }
          ]
        }
      ];
      const listLoaiSanPhams=dsLoaiSanPham.map(function(item)
      {
        return(
          <LoaiSanPham data={item}/>
        );
      });
    return(
        <>
            <>{listLoaiSanPhams}</>
        </>
    );
}
export default Content;