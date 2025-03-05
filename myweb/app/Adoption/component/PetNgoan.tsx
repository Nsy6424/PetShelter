import Link from "next/link";
import React from "react";

const pets = [
  {
    name: "Cocio",
    breed: "Chó cỏ",
    color: "Đen",
    age: "Trẻ",
    gender: "Đực",
    code: "C2100",
    vaccination: "Đã Tiêm",
    personality: "hiền lành, hơi nhút nhát",
    image: "/images/coco.png",
  },
  {
    name: "Bo",
    breed: "Chó cỏ",
    color: "Đen",
    age: "Trẻ",
    gender: "Đực",
    code: "C2101",
    vaccination: "Chưa rõ",
    personality: "hiền lành, hơi nhút nhát",
    image: "/images/p2.png",
  },
  {
    name: "Beola",
    breed: "Chó cỏ",
    color: "Đen",
    age: "Trẻ",
    gender: "Đực",
    code: "C2102",
    vaccination: "Chưa rõ",
    personality: "hiền lành, hơi nhút nhát",
    image: "/images/p3.png",
  },
  {
    name: "Choco la tẻ",
    breed: "Chó cỏ",
    color: "Đen",
    age: "Trẻ",
    gender: "Đực",
    code: "C2103",
    vaccination: "Chưa rõ",
    personality: "hiền lành, hơi nhút nhát",
    image: "/images/p4.png",
  },
  {
    name: "Ngu",
    breed: "Chó cỏ",
    color: "Đen",
    age: "Trẻ",
    gender: "Đực",
    code: "C2104",
    vaccination: "Chưa rõ",
    personality: "hiền lành, hơi nhút nhát",
    image: "/images/p5.png",
  },
  {
    name: "Xi",
    breed: "Chó cỏ",
    color: "Đen",
    age: "Trẻ",
    gender: "Đực",
    code: "C2105",
    vaccination: "Chưa rõ",
    personality: "hiền lành, hơi nhút nhát",
    image: "/images/p6.png",
  },
  {
    name: "Đần",
    breed: "Chó cỏ",
    color: "Đen",
    age: "Trẻ",
    gender: "Đực",
    code: "C2106",
    vaccination: "Chưa rõ",
    personality: "hiền lành, hơi nhút nhát",
    image: "/images/p7.png",
  },
  {
    name: "Độn",
    breed: "Chó cỏ",
    color: "Đen",
    age: "Trẻ",
    gender: "Đực",
    code: "C2107",
    vaccination: "Chưa rõ",
    personality: "hiền lành, hơi nhút nhát",
    image: "/images/p8.png",
  },
  {
    name: "Cuc ki",
    breed: "Chó cỏ",
    color: "Đen",
    age: "Trẻ",
    gender: "Đực",
    code: "C2108",
    vaccination: "Chưa rõ",
    personality: "hiền lành, hơi nhút nhát",
    image: "/images/p9.png",
  },
  {
    name: "LiLi",
    breed: "Chó cỏ",
    color: "Đen",
    age: "Trẻ",
    gender: "Đực",
    code: "C2109",
    vaccination: "Chưa rõ",
    personality: "hiền lành, hơi nhút nhát",
    image: "/images/p10.png",
  },
  {
    name: "Sữa",
    breed: "Chó Cảnh",
    color: "Trắng",
    age: "Trẻ",
    gender: "Cái",
    code: "C2110",
    vaccination: "Đã Tiêm",
    personality: "hiền lành,Năng động...",
    image: "/images/p11.png",
  },
  {
    name: "Milu",
    breed: "Chó Cảnh",
    color: "Trắng",
    age: "Trẻ",
    gender: "Đực",
    code: "C2111",
    vaccination: "Đã Tiêm",
    personality: "hiền lành, hơi nhút nhát",
    image: "/images/p2.png",
  },
];

const PetNgoan = () => {
  return (
    <div className="bg-green-50 text-black py-16 px-8">
      <h2 className="text-3xl font-bold text-green-900 text-center mb-8">
        Pet Ngoan Trong Tuần
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {pets.map((pet, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent p-4">
                <h3 className="text-lg font-bold text-white">{pet.name}</h3>
                <p className="text-sm text-gray-300">Tuổi: {pet.age}</p>
                <p className="text-sm text-gray-300">Giới tính: {pet.gender}</p>
                <p className="text-sm text-gray-300">
                  Tiêm phòng: {pet.vaccination}
                </p>
              </div>
            </div>
            <div className="p-4 text-center">
              <Link
                href={{
                  pathname: "/NhanNuoi",
                  query: { ...pet },
                }}
                className="inline-block mt-4 px-6 py-2 bg-green-700 text-white rounded-full"
              >
                Nhận nuôi
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="mx-1 px-3 py-1 bg-green-700 text-white rounded-full">
          &lt;
        </button>
        <button className="mx-1 px-3 py-1 bg-green-700 text-white rounded-full">
          1
        </button>
        <button className="mx-1 px-3 py-1 bg-green-700 text-white rounded-full">
          2
        </button>
        <button className="mx-1 px-3 py-1 bg-green-700 text-white rounded-full">
          3
        </button>
        <button className="mx-1 px-3 py-1 bg-green-700 text-white rounded-full">
          4
        </button>
        <button className="mx-1 px-3 py-1 bg-green-700 text-white rounded-full">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PetNgoan;
