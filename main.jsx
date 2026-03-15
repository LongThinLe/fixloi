import { createRoot } from 'react-dom/client'
import HomePages from './pages/HomePages'   
import BaitapLayout from './pages/BaitapLayout'
import DataBinding from './pages/DataBinding'
import HandleEvent from './pages/HandleEvent'
import ChangeNumber from './pages/StateDemo/ChangeNumber'
import StyleComponentDemo from './pages/StyleComponent/StyleComponentDemo'
//CSS cho toàn ứng dụng
import './assets/css/index.css'
import ChangeFontSize from './pages/StateDemo/ChangeFontSize'
import CarDemo from './pages/StateDemo/CarDemo'
import TinderClone from './pages/StateDemo/TinderClone'
import PropDemo from './pages/PropsDemo/PropDemo'
import RenderWithMap from './pages/PropsDemo/RenderWithMap'
import LiftingStateUpDemo from './pages/LiftingStateUpDemo/LiftingStateUpDemo'
import ExerciseCarStore from './pages/LiftingStateUpDemo/ExerciseCarStore'
import BaiTapGioHang from './pages/LiftingStateUpDemo/BaiTapGioHang/BaiTapGioHang'
import GioHang from './pages/LiftingStateUpDemo/BaiTapGioHang/GioHang'
import DanhSachSanPham from './pages/LiftingStateUpDemo/BaiTapGioHang/DanhSachSanPham'

createRoot(document.getElementById('root')).render(
  <div>
      {/* <HomePage /> */}
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      {/* <RenderCondition /> */}
      {/* <ChangeNumber /> */}
      {/* <StyleComponentDemo /> */}
      {/* <ChangeFontSize /> */}
      {/* <CarDemo /> */}
      {/* <TinderClone /> */}
      {/* <Propdemo /> */}
      {/* <RenderWithMap />  */}
      {/* <ProductList /> */}
      {/* <LiftingStateUpDemo /> */}
      {/*<ExerciseCarStore />*/}
      <BaiTapGioHang />
      <GioHang />
      <DanhSachSanPham />
  </div>
)