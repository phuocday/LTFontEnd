import logo from './logo.svg';
import './App.css';
import './bootstrap-5.2.3/css/bootstrap.min.css';
import TrangChu from './pages/trangchu';
import { Route, Routes } from 'react-router-dom';
import VeChungToi from './pages/vechungtoi';
import SanPham from './pages/sanpham';
import TinTuc from './pages/tintuc';
import LienHe from './pages/lienhe';
import LoaiSanPham from './Components/loaisanpham';
import Content from './Components/content';
import GioHang from './pages/giohang';
import ThanhToan from './pages/thanhtoan';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TrangChu/>}/>
        <Route path='/vechungtoi' element={<VeChungToi/>}/>
        <Route path='/sanpham' element={<SanPham/>}/>
        <Route path='/tintuc' element={<TinTuc/>}/>
        <Route path='/lienhe' element={<LienHe/>}/>
        <Route path='/giohang' element={<GioHang/>}/>
        <Route path='/thanhtoan' element={<ThanhToan/>}/>
      </Routes>
    </div>
  );
}
export default App;
