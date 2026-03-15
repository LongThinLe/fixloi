import React from 'react'
import GioHang from './GioHang';
import DanhSachSanPham from './DanhSachSanPham';


const mangSanPham = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2 Full HD+",
    heDieuHanh: "Android 9.0 Pie",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "vinsmartlive.jpg"
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP, Phụ 8 MP, 5 MP",
    ram: "6 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "meizuphone.jpg"
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5 1242 x 2688 Pixels",
    heDieuHanh: "IOS 12",
    cameraTruoc: "7 MP",
    cameraSau: "Chính 12 MP & Phụ 12MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "applephone.jpg"
  }
];

const BaiTapGioHang = () => {
  return (
    <div className='container'>
        <h3 className='text-center' >Bài tập giỏ hàng</h3>
        <GioHang />
        <DanhSachSanPham />
      
    </div>
  )
}

export default BaiTapGioHang
