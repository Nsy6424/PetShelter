import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div>
      <div className="bg-white w-full">
        <ul className="menu menu-horizontal flex justify-around text-slate-950 border  items-center  text-xl">
          <li className="hover:text-red-400">
            <Link href="/">Trang chủ</Link>
          </li>
          <li className="hover:text-red-400">
            <Link href={"/Adoption"}>Nhận Nuôi</Link>
          </li>
          <li className="hover:text-red-400">
            <Link href={"/Ungho"}>Ủng hộ</Link>
          </li>
          <li className="hover:text-red-400">
            <Link href="/Sukien">Sự Kiện</Link>
          </li>
          <li className="hover:text-red-400">
            {" "}
            <Link href="#">Sản Phẩm</Link>{" "}
          </li>
          <li className="hover:text-red-400">
            <a href="">Thú Y</a>
          </li>
          <li className="hover:text-red-400">
            <a href="#">Liên hệ</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
