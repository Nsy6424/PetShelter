// components/NewsSection.tsx

import React from "react";

interface NewsArticle {
  title: string;
  date: string;
  content: string;
  imageUrl: string;
}

const articles: NewsArticle[] = [
  {
    title: "Quá trình hồi phục hồi kì diệu của Sữa...",
    date: "12/09/2024",
    content: "Sửa là một cô chú chỉ có bản hành nhất không được...",
    imageUrl: "/images/news1.png",
  },
  {
    title: "Chiến dịch bảo vệ chó mèo cùng CoCoon",
    date: "15/05/2024",
    content: "Kháng định với nghiên cứu đối với bảo vệ động vật...",
    imageUrl: "https://example.com/image2.jpg",
  },
  {
    title: "Chú Mèo Hoang May Mắn Tìm Được Mái Ấm...",
    date: "1/02/2024",
    content: "Một cô gái đã tìm thấy Dina. Chú mèo này...",
    imageUrl: "https://example.com/image3.jpg",
  },
  {
    title: "Cứu hộ bé cún ghẻ bị bỏ rơi ở Phú Thọ",
    date: "20/02/2020",
    content: 'Một bạn tìm thấy em chia sẻ: "hôm đi trên đường...',
    imageUrl: "https://example.com/image4.jpg",
  },
];

const NewsSection: React.FC = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Tin Tức</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="rounded-t-lg w-full"
            />
            <h2 className="font-semibold text-xl mt-2">{article.title}</h2>
            <p className="text-gray-500">{article.date}</p>
            <p className="mt-2">{article.content}</p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md">
              Tìm hiểu thêm
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="mx-2 px-4 py-2 bg-gray-300 rounded">{"<"}</button>
        <button className="mx-2 px-4 py-2 bg-gray-300 rounded">1</button>
        <button className="mx-2 px-4 py-2 bg-gray-300 rounded">2</button>
        <button className="mx-2 px-4 py-2 bg-gray-300 rounded">3</button>
        <button className="mx-2 px-4 py-2 bg-gray-300 rounded">{">"}</button>
      </div>
    </div>
  );
};

export default NewsSection;
