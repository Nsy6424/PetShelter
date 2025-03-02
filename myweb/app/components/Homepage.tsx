import React from "react";

const Homepage = () => {
  return (
    <div>
      <div className="flex mb-10">
        <div className="relative w-1/2 pt-2 pl-20">
          <input
            type="text"
            placeholder="Tìm kiếm thú cưng..."
            className="w-full ml-20 py-3 pl-5 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between ">
        {/* Left Side - Text and Stats */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-green-900 mb-8">
            Cùng Nhau Tạo Một Mái Ấm
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
        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 bg-white">
          <img
            src="/images/homepage.png"
            alt="Pet Shelter"
            className="w-50 ml-30 h-auto rounded-lg pl-20 "
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
