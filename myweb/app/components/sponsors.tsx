import React from "react";

const sponsors = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        <div className="bg-green-100 p-8 rounded-full shadow-lg text-center w-32 h-32 flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold text-green-900">Đang Chờ</h3>
          <p className="text-2xl font-bold text-green-700">400+</p>
        </div>
        <div className="bg-green-100 p-8 rounded-full shadow-lg text-center w-32 h-32 flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold text-green-900">Ca Cứu Hộ</h3>
          <p className="text-2xl font-bold text-green-700">850+</p>
        </div>
        <div className="bg-green-100 p-8 rounded-full shadow-lg text-center w-32 h-32 flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold text-green-900">Đã Cứu Hộ</h3>
          <p className="text-2xl font-bold text-green-700">750+</p>
        </div>
        <div className="bg-green-100 p-8 rounded-full shadow-lg text-center w-32 h-32 flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold text-green-900">
            Chưa Sẵn Sàng
          </h3>
          <p className="text-2xl font-bold text-green-700">225+</p>
        </div>
      </div>
    </div>
  );
};

export default sponsors;
