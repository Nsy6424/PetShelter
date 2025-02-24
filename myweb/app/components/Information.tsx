import React from 'react'

const Information = () => {
  return (
    <div>
        <div className="bg-gray-100 p-10 text-center">
        <p className="text-xl text-gray-800">
          PetShelter là nền tảng kết nối cộng đồng yêu thú cưng, với sứ mệnh cứu
          hộ, chăm sóc và tìm mái ấm cho những thú cưng bị bỏ rơi, hoang lạc,
          hoặc bị bạo hành.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-green-700 text-white rounded-full text-lg">
            Hiểu Rõ Thêm Về Chúng Tôi
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between p-10">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-green-900 mb-8">
            Hiểu Rõ Thêm Về Chúng Tôi
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            PetShelter là nền tảng kết nối cộng đồng yêu thú cưng, với sứ mệnh
            cứu hộ, chăm sóc và tìm mái ấm trọn đời cho những thú cưng bị bỏ
            rơi, hoang lạc, hoặc bạo hành.
          </p>

          <h3 className="text-2xl font-semibold text-green-900 mb-4">
            Chúng tôi cam kết:
          </h3>
          <ul className="list-disc list-inside text-xl text-gray-700 mb-8">
            <li>
              Cứu Hộ & Chăm Sóc: Mang lại sức khỏe và niềm tin mới cho các bé.
            </li>
            <li>
              Tìm Gia Đình Mới: Kết nối thú cưng với những mái ấm yêu thương.
            </li>
            <li>
              Nâng Cao Nhận Thức: Lan tỏa trách nhiệm chăm sóc thú cưng qua các
              hoạt động cộng đồng.
            </li>
          </ul>

          <p className="text-xl text-gray-700">
            PetShelter không chỉ là nơi nhận nuôi thú cưng, mà còn là không gian
            gắn kết cộng đồng yêu động vật, cùng xây dựng tương lai tốt đẹp hơn
            cho tất cả các bé. Hãy cùng chúng tôi lan tỏa yêu thương!
          </p>
        </div>

        <div className="w-full md:w-1/2 ">
          <img
            src="https://cdn.discordapp.com/attachments/1300816466379014237/1343060737102319727/image.png?ex=67bbe648&is=67ba94c8&hm=2b7762c23d20046856895537d7c640494deb69a5aafbc2f7078c65d057fce6e7&"
            alt="Pet Shelter"
            className="w-full h-auto rounded-lg "
          />
        </div>
      </div>
    </div>
  )
}

export default Information