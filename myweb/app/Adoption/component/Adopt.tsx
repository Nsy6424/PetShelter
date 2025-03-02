import React from "react";
import Link from "next/link";

const Adopt = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between p-10">
        <div className="w-full md:w-1/2 text-center mb-8 md:mb-0">
          <div className="flex items-center  space-x-2 mb-6">
            <li>
              <Link href="/" className="text-green-800 font-bold">
                Trang chủ
              </Link>
            </li>
            <span className="text-green-800">{">"}</span>
            <li>
              <Link href="/Adoption" className="text-green-800 font-bold">
                Nhận Nuôi
              </Link>
            </li>
          </div>
          <h1 className="text-4xl font-bold text-green-900 mb-8">
            Bạn Đã Sẵn Sàng Chào Đón Thành Viên 4 Chân Mới Chưa?
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Để Không Một Bé Chó Mèo Nào Phải Lang Thang!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            <div className="bg-green-100 p-8 rounded-full shadow-lg text-center w-32 h-32 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-green-900">Đang Chờ</h3>
              <p className="text-2xl font-bold text-green-700">400+</p>
            </div>
            <div className="bg-green-100 p-8 rounded-full shadow-lg text-center w-32 h-32 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-green-900">
                Ca Cứu Hộ
              </h3>
              <p className="text-2xl font-bold text-green-700">850+</p>
            </div>
            <div className="bg-green-100 p-8 rounded-full shadow-lg text-center w-32 h-32 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-green-900">
                Đã Cứu Hộ
              </h3>
              <p className="text-2xl font-bold text-green-700">750+</p>
            </div>
            <div className="bg-green-100 p-8 rounded-full shadow-lg text-center w-32 h-32 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-green-900">
                Chưa Sẵn Sàng
              </h3>
              <p className="text-2xl font-bold text-green-700">225+</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="mt-10 px-8 py-4 bg-green-700 text-white rounded-full text-lg">
              Liên hệ với chúng tôi
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/images/homepage.png"
            alt="Pet Shelter"
            className="w-50 ml-30 h-auto rounded-lg pl-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Adopt;
