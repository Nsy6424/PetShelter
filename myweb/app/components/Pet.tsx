"use client";
import React, { useState } from "react";
import Image from "next/image";

const PetPage: React.FC = () => {
  // State kiểm tra mở dropdown
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Mảng dữ liệu 12 sản phẩm
  const productss = [
    {
      name: "Coco",
      age: "Trẻ",
      gender: "Đực",
      vaccine: "Chưa rõ",
      image: "/images/bo.jpg",
    },
    {
      name: "Bo",
      age: "Trẻ",
      gender: "Đực",
      vaccine: "Chưa rõ",
      image: "/images/bo.jpg",
    },
    {
      name: "Lili",
      age: "Trưởng thành",
      gender: "Cái",
      vaccine: "Đã",
      image: "/images/lili.jpg",
    },
    {
      name: "Sura",
      age: "Trưởng thành",
      gender: "Cái",
      vaccine: "Chưa rõ",
      image: "/images/sura.jpg",
    },
    {
      name: "Milo",
      age: "Trẻ",
      gender: "Đực",
      vaccine: "Chưa rõ",
      image: "/images/milo.jpg",
    },
    {
      name: "Bobo",
      age: "Trẻ",
      gender: "Cái",
      vaccine: "Đã",
      image: "/images/bobo.jpg",
    },
    {
      name: "Choco",
      age: "Trưởng thành",
      gender: "Cái",
      vaccine: "Chưa rõ",
      image: "/images/choco.jpg",
    },
    {
      name: "Gigi",
      age: "Trẻ",
      gender: "Đực",
      vaccine: "Đã",
      image: "/images/gigi.jpg",
    },
    {
      name: "Sisi",
      age: "Trưởng thành",
      gender: "Cái",
      vaccine: "Chưa rõ",
      image: "/images/sisi.jpg",
    },
    {
      name: "Titi",
      age: "Trẻ",
      gender: "Cái",
      vaccine: "Chưa rõ",
      image: "/images/titi.jpg",
    },
    {
      name: "Papi",
      age: "Trưởng thành",
      gender: "Đực",
      vaccine: "Đã",
      image: "/images/papi.jpg",
    },
    {
      name: "Kiki",
      age: "Trẻ",
      gender: "Đực",
      vaccine: "Chưa rõ",
      image: "/images/kiki.jpg",
    },
  ];

  // Hàm toggle dropdown
  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-green-50 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 ">
          <h2 className="text-3xl font-semibold text-green-800">
            Pet Ngoan Trong Tuần
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hiển thị 4 sản phẩm đầu tiên */}
          {productss.slice(0, 4).map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={product.image} // Đường dẫn hình ảnh
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {product.name}
                </h3>
                <p className="text-gray-500">Tuổi: {product.age}</p>
                <p className="text-gray-500">Giới tính: {product.gender}</p>
                <p className="text-gray-500">Tiêm phòng: {product.vaccine}</p>
                <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700">
                  Nhận nuôi
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Nút "Sổ thêm sản phẩm" */}
        <div className="text-center mt-6">
          <button
            onClick={toggleDropdown}
            className="text-green-600 bg-white border-2 border-green-600 py-2 px-6 rounded-full hover:bg-green-100"
          >
            {isOpen ? "^" : "v"}
          </button>
        </div>

        {/* Hiển thị thêm sản phẩm khi dropdown mở */}
        {isOpen && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
            {/* Hiển thị 8 sản phẩm còn lại */}
            {productss.slice(4).map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={product.image} // Đường dẫn hình ảnh
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {product.name}
                  </h3>
                  <p className="text-gray-500">Tuổi: {product.age}</p>
                  <p className="text-gray-500">Giới tính: {product.gender}</p>
                  <p className="text-gray-500">Tiêm phòng: {product.vaccine}</p>
                  <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700">
                    Nhận nuôi
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PetPage;
