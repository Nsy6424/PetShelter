"use client";

import React, { useState } from "react";

interface Product {
  name: string;
  price: string;
  oldPrice: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Chó Nâu",
    price: "19,000",
    oldPrice: "30,000",
    image: "/images/sp1.png",
  },
  {
    name: "Lịch Mèo",
    price: "19,000",
    oldPrice: "40,000",
    image:
      "/images/sp2.png",
  },
  {
    name: "3 Chú mèo",
    price: "109,000",
    oldPrice: "130,000",
    image:
      "/images/sp3.png",
  },
  {
    name: "Mèo Trắng",
    price: "10,000",
    oldPrice: "20,000",
    image:
      "/images/sp4.png",
  },
  {
    name: "Chân Gỗ",
    price: "59,000",
    oldPrice: "70,000",
    image:
      "/images/sp5.png",
  },
  {
    name: "Sen đá",
    price: "39,000",
    oldPrice: "70,000",
    image:
      "https://hasem.vn/wp-content/uploads/2023/10/tieu-canh-smile-gift-2-600x600-1-450x450.jpeg",
  },
  {
    name: "Ly ",
    price: "59,000",
    oldPrice: "70,000",
    image:
      "https://cuutrodongvatdanang.com/uploads/photos/petup-shop-ban-hang-gay-quy-hoi-ctdv-da-nang-5.jpg",
  },
];

const ProductCard: React.FC<Product> = ({ name, price, oldPrice, image }) => (
  <div className="flex-shrink-0 w-64 bg-slate-100 rounded-lg shadow-md p-4">
    <img
      className="w-full h-40 object-cover rounded-md"
      src={image}
      alt={name}
    />
    <h3 className="text-lg font-semibold text-gray-900 mt-2">{name}</h3>
    <p className="text-sm text-gray-600">Mô tả</p>
    <div className="flex items-center justify-between mt-2">
      <span className="text-xl font-bold text-orange-500">{price} đ</span>
      <span className="text-sm text-gray-400 line-through">{oldPrice} đ</span>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 5) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 5 + products.length) % products.length
    );
  };

  return (
    <div>
      <div className="flex justify-center items-center pt-5">
        <div className="border border-green-300 p-4 rounded-xl flex items-center justify-between text-lg font-semibold text-green-700">
          Các Sản Phẩm Gây Quỹ
        </div>
      </div>
      <div>
        <div className="container mx-auto my-8">
          <div className="flex justify-center space-x-4 ">
            <button
              onClick={prevProduct}
              className="px-2 py-1 bg-gray-600 text-white rounded-l-lg hover:bg-gray-700"
            >
              &#60;
            </button>

            {products
              .slice(currentIndex, currentIndex + 5)
              .map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  image={product.image}
                />
              ))}

            <button
              onClick={nextProduct}
              className="px-2 py-1 bg-gray-600 text-white rounded-r-lg hover:bg-gray-700"
            >
              &#62;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
