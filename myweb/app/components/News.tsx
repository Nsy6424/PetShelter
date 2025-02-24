import React from 'react'

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
                  src="https://cdn.discordapp.com/attachments/1300816466379014237/1342038651345043528/image.png?ex=67bad164&is=67b97fe4&hm=692858b01edafac0c2399c2dc7c948aadcf4f68648fc15ba84c8148286ffecb8&"
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
                  src="https://cdn.discordapp.com/attachments/1300816466379014237/1342039752353775647/image.png?ex=67bad26a&is=67b980ea&hm=202da6d28e34f6f448d1e3efc15ea3899dfa54f1883308584c280a31b7051fe3&"
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
                  src="https://cdn.discordapp.com/attachments/1300816466379014237/1342041248562806817/image.png?ex=67bad3cf&is=67b9824f&hm=24bff722a7fa481aa54bc6237490920e6eec9f8fda953da113b71b62478f0f01&"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News