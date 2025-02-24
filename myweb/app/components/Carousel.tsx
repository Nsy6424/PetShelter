import React from "react";
import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://cdn.discordapp.com/attachments/1300816466379014237/1342025441845841950/image.png?ex=67bac516&is=67b97396&hm=7966592a144c2613d167a67b5e288b7a9175fb58ee8eba66dc037f450d9729e3&"
            alt="logo"
            width={200}
            height={200}
            className="w-full"
          ></img>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://cdn.discordapp.com/attachments/1300816466379014237/1342025442294763520/image.png?ex=67bac517&is=67b97397&hm=97af5cff546254cf87eb7cfb5db52a4eed444317a309471821a9837f7253a4c1&"
            alt="logo"
            width={200}
            height={200}
            className="w-full"
          ></img>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://cdn.discordapp.com/attachments/1300816466379014237/1342025442684829788/image.png?ex=67bac517&is=67b97397&hm=12170191674c049652a5278316ad1f4b2301cdb7023e0806b9e16c2957d72cb4&"
            alt="logo"
            width={200}
            height={200}
            className="w-full"
          ></img>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://cdn.discordapp.com/attachments/1300816466379014237/1342025481519628320/image.png?ex=67bac520&is=67b973a0&hm=967c70bed1fa59f245ec6fec83df62a6c25346c467fb441d0b9cafbcccae939e&"
            alt="logo"
            width={200}
            height={200}
            className="w-full"
          ></img>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src="https://cdn.discordapp.com/attachments/1300816466379014237/1342025510787612795/image.png?ex=67bac527&is=67b973a7&hm=9b60e25c0a3c4244074fa13aba17cf134fdcf31b13fdbc9d2222c835dbc5a03f&"
            alt="logo"
            width={200}
            height={200}
            className="w-full"
          ></img>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
