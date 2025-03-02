import React from "react";

const News = () => {
  return (
    <div>
      <div>
        <div className="bg-green-50 py-10">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-900 mb-8 ">
              Tin Tức
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <img
                  src="/images/news1.png"
                  alt="Story 1"
                  className="w-1/3 rounded-lg shadow-lg"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-green-900">
                    Quá trình hồi phục kì diệu của Sữa...
                  </h3>
                  <p className="text-gray-600">Ngày đăng: 12/09/2024</p>
                  <p className="text-gray-700 mt-2">
                    Sữa là một cô chó bị chủ cũ bỏ rơi và trong tình trạng không
                    được chăm sóc...
                  </p>
                  <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded-full">
                    Tìm hiểu thêm
                  </button>
                </div>
              </div>
              <div className="flex">
                <img
                  src="/images/news2.png"
                  alt="Story 2"
                  className="w-1/3 rounded-lg shadow-lg"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-green-900">
                    Chiến dịch bảo vệ chó mèo cùng CoCoon
                  </h3>
                  <p className="text-gray-600">Ngày đăng: 15/05/2024</p>
                  <p className="text-gray-700 mt-2">
                    Khẳng định sự nghiêm túc đối với hành trình bảo vệ động vật
                    tại Việt Nam...
                  </p>
                  <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded-full">
                    Tìm hiểu thêm
                  </button>
                </div>
              </div>
              <div className="flex">
                <img
                  src="/images/news3.png"
                  alt="Story 3"
                  className="w-1/3 rounded-lg shadow-lg"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-green-900">
                    Chú Mèo Hoang May Mắn Tìm Được Mái Ấm...
                  </h3>
                  <p className="text-gray-600">Ngày đăng: 1/02/2024</p>
                  <p className="text-gray-700 mt-2">
                    Một cô gái đã tìm thấy Dina. Chú mèo khi ấy ở trong một tình
                    trạng rất tồi tệ. Cô ấy chia sẻ: “Dina khi ấy chỉ có da bọc
                    xương cùng với một bộ long toàn bọ chét,...
                  </p>
                  <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded-full">
                    Tìm hiểu thêm
                  </button>
                </div>
              </div>
              <div className="flex">
                <img
                  src="/images/news4.png"
                  alt="Story 3"
                  className="w-1/3 rounded-lg shadow-lg"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-green-900">
                    Cứu hộ bé cún ghẻ bị bỏ rơi ở Phú Thọ
                  </h3>
                  <p className="text-gray-600">Ngày đăng: 20/02/2024</p>
                  <p className="text-gray-700 mt-2">
                    Một bạn tìm thấy em chia sẽ: “hôm đi trên đường em thấy một
                    cục gì đó đen thui lại gần mới hoảng hốt vì là một em chó
                    trông em rất yếu. Em liền gọi cho đội cứu hộ Ps để nhờ sự
                    giúp đở”. Hiện tại em ấy đã nuôi chú cún rất tốt và em cún
                    rất đẹp trai.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded-full">
                    Tìm hiểu thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
