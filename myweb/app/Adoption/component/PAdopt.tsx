import React from "react";

const PAdopt = () => {
  return (
    <div>
      <div className="bg-green-50 py-16 px-8">
        <h2 className="text-3xl font-bold text-green-900 text-center mb-8">
          Quy Trình Nhận Nuôi
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-6">
            Trước khi quyết định nhận nuôi một bé thú cưng, bạn hãy tự hỏi bản
            thân rằng mình đã sẵn sàng để chịu trách nhiệm lâu dài cho bé chưa,
            bao gồm cả về tài chính, không gian sống và tinh thần. Việc nhận
            nuôi cần sự đồng thuận và cam kết từ bạn và các thành viên trong gia
            đình. Hãy cân nhắc thật kỹ trước khi liên hệ với PetShelter để nhận
            nuôi.
          </p>

          <p className="font-semibold text-green-800 mb-4">
            Bạn đã sẵn sàng chưa? Hãy làm theo các bước dưới đây:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-8">
            <li>
              Tìm hiểu về thú cưng bạn muốn nhận nuôi trên trang web của
              PetShelter, xem thông tin chi tiết về bé (tuổi, giống, tính cách,
              tình trạng sức khỏe).
            </li>
            <li>
              Liên hệ với tình nguyện viên phụ trách bé thú cưng để tìm hiểu
              thêm và có thể hỏi về các thắc mắc của bạn.
            </li>
            <li>
              Tham gia phỏng vấn nhận nuôi: Bạn sẽ được yêu cầu tham gia một
              buổi phỏng vấn để giúp chúng tôi đánh giá sự phù hợp của bạn với
              bé thú cưng.
            </li>
            <li>
              Chuẩn bị cơ sở vật chất: Đảm bảo rằng bạn đã chuẩn bị đầy đủ không
              gian sống và vật dụng cần thiết cho bé. Sau đó, bạn sẽ cần ký giấy
              tờ nhận nuôi và đóng phí nhận nuôi (tiền via) để chính thức đón bé
              về nhà.
            </li>
            <li>
              Theo dõi tình trạng bé thường xuyên: Sau khi nhận nuôi, hãy cập
              nhật tình hình bé với chúng tôi, đặc biệt là khi có sự cố để nhận
              được sự hỗ trợ và tư vấn kịp thời.
            </li>
          </ol>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-900 mb-4">
              Điều Kiện Nhận Nuôi
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Tài chính tự chủ và ổn định.</li>
              <li>Chỗ ở cố định, ưu tiên các khu vực lân cận</li>
              <li>Cam kết tiêm phòng và triệt sản</li>
            </ul>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            <p className="font-semibold">Lưu ý quan trọng:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Chỉ inbox 01 tình nguyện viên phụ trách để phỏng vấn, KHÔNG NÊN
                inbox tất cả danh sách. Nếu tình nguyện viên không phản hồi
                trong vòng 1 ngày, vui lòng inbox cho trang chính.
              </li>
              <li>
                Phỏng vấn nhận nuôi có thể có những câu hỏi mang tính riêng tư,
                vui lòng kiên nhẫn.
              </li>
              <li>
                Phí nhận nuôi mỗi bé sẽ khác nhau, tùy thuộc vào tình trạng sức
                khỏe, tiêm phòng, triệt sản, và các dịch vụ y tế khác đã thực
                hiện.
              </li>
              <li>
                Tiền via được sử dụng để trả các chi phí y tế trước khi bé được
                nhận nuôi và hỗ trợ chi phí chăm sóc các bé khác tại trung tâm.
              </li>
              <li>
                Nếu sau một thời gian bạn không thể tiếp tục chăm sóc bé, vui
                lòng trả lại cho PetShelter, không tự ý đem cho người khác.
              </li>
            </ul>
          </div>

          <p className="mt-6 text-gray-700">
            Nếu bạn chỉ có thể chăm sóc tạm thời (foster), vui lòng tham khảo
            thêm thông tin tại mục Tình nguyện viên.
          </p>

          <p className="mt-4 text-gray-700">
            Tìm hiểu thêm về Chương Trình Nhận Nuôi Ảo tại banner cuối trang
            này.
          </p>

          <p className="mt-8 text-center text-green-800 font-semibold">
            Hãy cùng PetShelter tạo nên một mái ấm yêu thương cho những thú cưng
            đáng yêu!
          </p>
          <p className="mt-8 text-center text-green-800 font-semibold">
            Hãy cùng PetShelter tạo nên một mái ấm yêu thương cho những thú cưng
            đáng yêu!
          </p>
        </div>
      </div>
      <div>
        <img src="/images/banner4.png" className="w-full h-25 " />
      </div>
    </div>
  );
};

export default PAdopt;
