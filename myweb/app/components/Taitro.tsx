import React from "react";

const Taitro = [
  {
    name: "Me-O Việt Nam",
    logo: "/images/t1.png",
  },

  {
    name: "Snappy Tom Việt Nam",
    logo: "/images/t2.png",
  },
  {
    name: "The Cocoon Việt Nam",
    logo: "/images/t3.png",
  },
  {
    name: "Bệnh viện 2Vet Việt Nam",
    logo: "/images/t4.png",
  },
];

const Sponsor = () => {
  return (
    <div className="bg-green-50 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl  font-semibold text-green-700 inline-flex items-center ">
          <span className="mx-2">🐾</span>
          Các Nhà Tài Trợ
          <span className="mx-2">🐾</span>
        </h2>
      </div>
      <div className="flex justify-around gap-10 items-center">
        {Taitro.map((sponsor, index) => (
          <div key={index} className="text-center">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-35 h-32 mx-auto mb-4 px-17"
            />
            <p className="text-lg font-semibold text-gray-700">
              {sponsor.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
