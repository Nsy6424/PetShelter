import React from "react";

const Taitro = [
  {
    name: "Me-O Việt Nam",
    logo: "https://cdn.discordapp.com/attachments/1300816466379014237/1343763276537794612/image.png?ex=67be7493&is=67bd2313&hm=35469230d36ab464c1db1396a92f0738b170c04b8e06f28d0577378598dbb76a&",
  },

  {
    name: "Snappy Tom Việt Nam",
    logo: "https://cdn.discordapp.com/attachments/1300816466379014237/1343761494613033032/image.png?ex=67be72ea&is=67bd216a&hm=d6f3319bc2a6963b6614fed3f4b161126b1640e079f176c896cee5856ba1a897&",
  },
  {
    name: "The Cocoon Việt Nam",
    logo: "https://cdn.discordapp.com/attachments/1300816466379014237/1343761352648298518/image.png?ex=67be72c8&is=67bd2148&hm=7b9ed5204ea6ac474b2a39725d9a88339e4bc063701dd1717da63aaf887472b5&",
  },
  {
    name: "Bệnh viện 2Vet Việt Nam",
    logo: "https://cdn.discordapp.com/attachments/1300816466379014237/1343761494613033032/image.png?ex=67be72ea&is=67bd216a&hm=d6f3319bc2a6963b6614fed3f4b161126b1640e079f176c896cee5856ba1a897&",
  },
];

const Sponsor = () => {
  return (
    <div className="bg-green-50 py-10">
      <div className="text-center mb-8">
        <h2 className="border border-green-300 text-lg font-semibold text-green-700 inline-flex items-center ">
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
