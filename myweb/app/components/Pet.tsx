"use client";
import React, { useState } from "react";
import Image from "next/image";
import coco from "./images/coco.png";
const PetPage: React.FC = () => {
  // State kiểm tra mở dropdown
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Mảng dữ liệu 12 sản phẩm
  const productss = [
    {
      name: "Cocio",
      breed: "Chó",
      color: "Đen",
      age: "Trẻ",
      gender: "Đực",
      code: "C2100",
      vaccination: "Đã Tiêm",
      personality: "hiền lành, hơi nhút nhát",
      image: "/images/coco.png",
    },
    {
      name: "Bo",
      breed: "Mèo",
      color: "Nâu",
      age: "Trẻ",
      gender: "Cái",
      code: "C2101",
      vaccination: "Đã Tiêm",
      personality: "hiền lành, hơi nhút nhát",
      image: "/images/p2.png",
    },
    {
      name: "Beola",
      breed: "Chó",
      color: "Trắng",
      age: "Trưởng thành",
      gender: "Đực",
      code: "C2102",
      vaccination: "Đã Tiêm",
      personality: "hiền lành, hơi nhút nhát",
      image: "/images/p3.png",
    },
    {
      name: "Choco la tẻ",
      breed: "mèo",
      color: "Đen",
      age: "Trẻ",
      gender: "Đực",
      code: "C2103",
      vaccination: "Chưa Rõ",
      personality: "hiền lành, hơi nhút nhát",
      image: "/images/p4.png",
    },
    {
      name: "Ngu",
      breed: "Mèo",
      color: "Nâu",
      age: "Trưởng thành",
      gender: "Cái",
      code: "C2104",
      vaccination: "Đã Tiêm",
      personality: "hiền lành, hơi nhút nhát",
      image: "/images/p5.png",
    },
    {
      name: "Xi",
      breed: "Chó",
      color: "Nâu",
      age: "Trưởng thành",
      gender: "Đực",
      code: "C2105",
      vaccination: "Đã Tiêm",
      personality: "hiền lành, hơi nhút nhát",
      image: "/images/p6.png",
    },
    {
      name: "Đần",
      breed: "Mèo",
      color: "Đen",
      age: "Trẻ",
      gender: "Đực",
      code: "C2106",
      vaccination: "Chưa Tiêm",
      personality: "hiền lành, hơi nhút nhát",
      image: "/images/p7.png",
    },
    {
      name: "Độn",
      breed: "Chó",
      color: "Trắng",
      age: "Trương thành",
      gender: "Đực",
      code: "C2107",
      vaccination: "Đã Tiêm",
      personality: "hiền lành, hơi nhút nhát",
      image: "/images/p8.png",
    },
    {
      name: "Cuc ki",
      breed: "Mèo",
      color: "Đen",
      age: "Trẻ",
      gender: "Đực",
      code: "C2108",
      vaccination: "Chưa Rõ",
      personality: "hiền lành, hơi nhút nhát",
      image: "/images/p9.png",
    },
    {
      name: "LoLi",
      breed: "Chó cỏ",
      color: "Đen",
      age: "Trẻ",
      gender: "Đực",
      code: "C2109",
      vaccination: "Chưa Tiêm",
      personality: "hiền lành, hơi nhút nhát",
      image: "/images/p10.png",
    },
    {
      name: "Sữa",
      breed: "Chó",
      color: "Trắng",
      age: "Trẻ",
      gender: "Cái",
      code: "C2110",
      vaccination: "Đã Tiêm",
      personality: "hiền lành,Năng động...",
      image: "/images/p11.png",
    },
    {
      name: "Milu",
      breed: "Mèo",
      color: "Trắng",
      age: "Trưởng thành",
      gender: "Đực",
      code: "C2111",
      vaccination: "Chưa Tiêm",
      personality: "hiền lành, hơi nhút nhát",
      image: "/images/p2.png",
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
                <p className="text-gray-500">
                  Tiêm phòng: {product.vaccination}
                </p>
                <p className="text-gray-500">
                  Tính cách: {product.personality}
                </p>

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
                  src={product.image}
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
                  <p className="text-gray-500">
                    Tiêm phòng: {product.vaccination}
                  </p>

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
