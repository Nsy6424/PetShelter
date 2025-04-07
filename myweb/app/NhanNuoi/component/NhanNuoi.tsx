"use client";
import Homepage from "@/app/components/Homepage";
import Menu from "@/app/components/Menu";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const NhanNuoi = () => {
  const searchParams = useSearchParams();
  const name = searchParams?.get("name") || "";
  const breed = searchParams?.get("breed") || "";
  const color = searchParams?.get("color") || "";
  const age = searchParams?.get("age") || "";
  const gender = searchParams?.get("gender") || "";
  const code = searchParams?.get("code") || "";
  const vaccination = searchParams?.get("vaccination") || "";
  const personality = searchParams?.get("personality") || "";
  const image = searchParams?.get("image") || "";

  return (
    <div className="bg-white">
      <div>
        <div>
          <Navbar></Navbar>
          <Menu></Menu>
        </div>
        <div className="flex mb-10"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between p-10">
        <div className="w-full md:w-1/2 text-center mb-8 md:mb-0">
          <div className="flex items-center space-x-2 mb-6">
            <li>
              <Link href="/" className="text-green-800 font-bold">
                Trang chủ
              </Link>
            </li>
            <span className="text-green-800">{">"}</span>
            <li>
              <Link href="/" className="text-green-800 font-bold">
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
      <div className="bg-green-100 p-10 background-image">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            Thông tin cá nhân
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img
                src={image as string}
                alt={name as string}
                className="rounded-lg mb-4"
              />
            </div>
            <div className="md:w-2/3 md:pl-20 text-black">
              <h3 className="text-2xl font-bold text-green-900">{name}</h3>
              <ul className="list-none mt-4">
                <li>Giống: {breed}</li>
                <li>Màu: {color}</li>
                <li>Độ tuổi: {age}</li>
                <li>Giới tính: {gender}</li>
                <li>Mã nhận nuôi: {code}</li>
                <li>Tiêm phòng: {vaccination}</li>
                <li>Tính cách: {personality}</li>
              </ul>

              <Link
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLScyPbk8o1WTbq938gh4tusr6GitUpr7TCokveLqKROCrk1TDw/viewform"
                }
              >
                <button className="mt-4 px-6 py-2 bg-green-700 text-white rounded-full">
                  Đăng ký nhận nuôi
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-black">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Quy Trình Nhận Nuôi
            </h3>
            <p>
              Trước khi quyết định nhận nuôi một bé thú cưng, bạn hãy tự hỏi bản
              thân rằng mình đã sẵn sàng để chịu trách nhiệm lâu dài cho bé
              chưa, bao gồm cả về tài chính, không gian sống và tinh thần. Việc
              nhận nuôi sẽ đóng góp vào sứ mệnh cứu và tái tạo cuộc sống cho các
              thành viên trong gia đình. Hãy cân nhắc kỹ trước khi liên hệ với
              PetShelter để nhận nuôi.
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>
                Tìm hiểu về thú cưng bạn muốn nhận nuôi trên trang web của
                PetShelter, xem thông tin chi tiết về bé (tuổi, giống, tính
                cách, tình trạng sức khỏe).
              </li>
              <li>
                Liên hệ với nhân viên của PetShelter để được tư vấn thêm và có
                thể hỏi về các thắc mắc của bạn.
              </li>
              <li>
                Tham gia buổi gặp gỡ với bé: Sau đó, bạn sẽ được yêu cầu tham
                gia một buổi phỏng vấn để giúp PetShelter hiểu rõ hơn về khả
                năng chăm sóc và điều kiện sống của bạn đối với bé thú cưng.
              </li>
              <li>
                Chuẩn bị cho sự xuất hiện của bé: Đảm bảo rằng bạn đã chuẩn bị
                đầy đủ cho không gian sống và vật dụng cần thiết cho bé trước
                khi đón bé về nhà.
              </li>
              <li>
                Hoàn tất thủ tục nhận nuôi: Sau khi nhận nuôi, hãy cập nhật tình
                hình bé với chúng tôi, đặc biệt là các thông tin về sức khỏe và
                tình trạng tiêm phòng.
              </li>
            </ul>
            <p className="mt-4">
              Lưu ý quan trọng:
              <ul className="list-disc pl-5">
                <li>
                  Những bé chưa được tiêm phòng và triệt sản, KHÔNG NÊN inbox
                  tất cả danh sách.
                </li>
                <li>
                  Những bé đã được tiêm phòng hoặc triệt sản, vui lòng inbox cho
                  trang chính.
                </li>
                <li>
                  Phòng tránh dịch bệnh, không nhận nuôi bé khi bé đang mang
                  thai, vui lòng kiên nhẫn.
                </li>
              </ul>
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Điều Kiện Nhận Nuôi
            </h3>
            <ul className="list-disc pl-5 text-black">
              <li>Tài chính tự chủ và ổn định.</li>
              <li>Chỗ ở cố định, ưu tiên các khu vực lân cận.</li>
              <li>Cam kết tiêm phòng và triệt sản.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NhanNuoi;
