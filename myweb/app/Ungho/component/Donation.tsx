import React from "react";

const Donation = () => {
  return (
    <div className="p-6 text-[#4C7044] font-sans flex flex-row items-center">
      {/* Left Side - Text Content */}
      <div className="w-2/3 pr-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-900">
          Tôi muốn ủng hộ
        </h2>
        <p className="mb-4 text-xl text-gray-900">
          Mọi hoạt động cứu hộ của PetShelter hoàn toàn dựa trên các khoản quyên
          góp từ cộng đồng. Chi phí hàng tháng của nhóm bao gồm tiền thuê nhà,
          tiền viện phí, thức ăn, điện, nước, thuốc men và đồ dùng, bỉm tã,
          lương hỗ trợ các bạn tình nguyện viên dọn dẹp... Nhóm rất cần sự giúp
          đỡ của các bạn để có thể duy trì nhà chung cũng như đội cứu hộ. Chỉ
          cần cố định 50k - 100k hàng tháng là các bạn đã giúp đỡ được cho nhóm
          và các bé rất nhiều!
        </p>
        <p className="mb-4 text-xl text-gray-900">
          Chi phí sẽ được chia đều cho các bé khác còn nằm viện và gây dựng nhà
          chung. Ngoài ra, nhóm cũng tiếp nhận quyên góp bằng hiện vật như quần
          áo cũ (để lót chuồng), bỉm, găng tay y tế, thức ăn, cát vệ sinh v.v...
        </p>
        <p className="mb-4 font-bold text-red-600">
          *Lưu ý: nhóm không dùng Zalo và KHÔNG BAO GIỜ yêu cầu Mạnh Thường Quân
          cung cấp thông tin thẻ hoặc mã OTP.
        </p>
        <h3 className="text-xl font-bold mb-2 text-center text-green-900">
          Tài khoản nhận quyên góp của nhóm
        </h3>
        <p className="text-center font-semibold text-xl text-gray-900">
          Chi phí sẽ được chia đều cho các bé khác còn nằm viện và gây dựng nhà
          chung.
        </p>
        <div className="text-center mt-4 text-xl text-gray-900">
          <p className="font-bold">Tên ngân hàng: MB Bank</p>
          <p className="font-bold">
            Tên tài khoản: Trung Tam Cuu Tro Dong Vat PetShelter
          </p>
          <p className="font-bold">Số tài khoản: 0121 9999 345</p>
          <hr className="my-2 border-t border-gray-400 w-3/4 mx-auto" />
        </div>
        <p className="mb-4 text-center text-xl text-gray-900">
          📫{" "}
          <span className="font-semibold text-xl text-gray-900">
            Địa điểm đặt hòm quyên góp:
          </span>{" "}
          193 Nguyễn Lương Bằng - Đà Nẵng
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/3 flex justify-center">
        <div className="p-4">
          <img
            src="/images/Petshelter.png"
            alt="QR Code"
            className="w-50 h-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Donation;
