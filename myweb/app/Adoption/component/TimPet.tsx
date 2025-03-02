"use client";
import React from "react";
import Link from "next/link";

const TimPet: React.FC = () => {
  return (
    <div className="bg-green-50 text-black py-16 px-8">
      <h2 className="text-4xl font-bold text-green-900 text-center mb-8">
        <span role="img" aria-label="paw">
          🐾
        </span>{" "}
        Tìm Thú Cưng{" "}
        <span role="img" aria-label="paw">
          🐾
        </span>
      </h2>
      <div className="flex justify-center space-x-10 mb-8">
        <button className="px-6 py-2 border border-green-700 text-green-700 rounded-full hover:bg-green-700 hover:text-white ">
          Tất cả
        </button>
        <button className="px-6 py-2 border border-green-700 text-green-700 rounded-full hover:bg-green-700 hover:text-white ">
          Chó
        </button>
        <button className="px-6 py-2 border border-green-700 text-green-700 rounded-full hover:bg-green-700 hover:text-white ">
          Mèo
        </button>
        <button className="px-6 py-2 border border-green-700 text-green-700 rounded-full hover:bg-green-700 hover:text-white ">
          Khác
        </button>
      </div>
      <div className="bg-green-50 py-10">
        <div className="max-w-5xl mx-auto px-5 sm:px- lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label className="text-green-800 font-semibold mb-2">
                Giới tính
              </label>
              <select className="border border-green-800 rounded-md p-2 text-black">
                <option value="">Tất cả</option>
                <option value="Đực">Đực</option>
                <option value="Cái">Cái</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-green-800 font-semibold mb-2">
                Độ tuổi
              </label>
              <select className="border border-green-800 rounded-md p-2 text-black">
                <option value="">Tất cả</option>
                <option value="Trẻ">Trẻ</option>
                <option value="Trưởng thành">Trưởng thành</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-green-800 font-semibold mb-2">
                Tiêm Phòng
              </label>
              <select className="border border-green-800 rounded-md p-2 text-black">
                <option value="">Tất cả</option>
                <option value="Đã Tiêm">Đã Tiêm</option>
                <option value="Chưa Tiêm">Chưa Tiêm</option>
                <option value="Chưa Rõ">Chưa Rõ</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-green-800 font-semibold mb-2">Màu</label>
              <select className="border border-green-800 rounded-md p-2 text-black">
                <option value="">Tất cả</option>
                <option value="Trắng">Trắng</option>
                <option value="Đen">Đen</option>
                <option value="Nâu">Nâu</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="px-6 py-2 bg-green-700 text-white rounded-full">
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimPet;
