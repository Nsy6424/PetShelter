"use client";
import React, { useState } from "react";

const PetFinder = () => {
  const [activeButton, setActiveButton] = useState("all");

  const handleButtonClick = (button: React.SetStateAction<string>) => {
    setActiveButton(button);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-green-900 text-center mb-8">
        Tìm Thú Cưng
      </h2>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-6 py-2 ${
            activeButton === "all"
              ? "bg-green-700 text-white"
              : "border border-green-700 text-green-700"
          } rounded-full`}
          onClick={() => handleButtonClick("all")}
        >
          Tất cả
        </button>
        <button
          className={`px-6 py-2 ${
            activeButton === "dog"
              ? "bg-green-700 text-white"
              : "border border-green-700 text-green-700"
          } rounded-full`}
          onClick={() => handleButtonClick("dog")}
        >
          Chó
        </button>
        <button
          className={`px-6 py-2 ${
            activeButton === "cat"
              ? "bg-green-700 text-white"
              : "border border-green-700 text-green-700"
          } rounded-full`}
          onClick={() => handleButtonClick("cat")}
        >
          Mèo
        </button>
        <button
          className={`px-6 py-2 ${
            activeButton === "other"
              ? "bg-green-700 text-white"
              : "border border-green-700 text-green-700"
          } rounded-full`}
          onClick={() => handleButtonClick("other")}
        >
          Khác
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="flex flex-col">
          <label className="text-green-800 font-semibold mb-2">Giới tính</label>
          <select className="border border-green-800 rounded-md p-2">
            <option>Tất cả</option>
            <option>Đực</option>
            <option>Cái</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-green-800 font-semibold mb-2">Độ tuổi</label>
          <select className="border border-green-800 rounded-md p-2">
            <option>Tất cả</option>
            <option>Trẻ</option>
            <option>Trưởng thành</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-green-800 font-semibold mb-2">Triệt sản</label>
          <select className="border border-green-800 rounded-md p-2">
            <option>Tất cả</option>
            <option>Đã</option>
            <option>Chưa</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-green-800 font-semibold mb-2">Màu</label>
          <select className="border border-green-800 rounded-md p-2">
            <option>Tất cả</option>
            <option>Trắng</option>
            <option>Đen</option>
            <option>Nâu</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-green-800 font-semibold mb-2">Tên</label>
          <select className="border border-green-800 rounded-md p-2">
            <option>Tất cả</option>
            <option>Cocio</option>
            <option>Bo</option>
            <option>Lili</option>
          </select>
        </div>
        <div className="flex items-end">
          <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
            Xem Tất Cả
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetFinder;
