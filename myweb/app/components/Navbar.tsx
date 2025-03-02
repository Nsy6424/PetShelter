"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TiThMenuOutline } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { GrDashboard } from "react-icons/gr";
import { MdOutlineLogout } from "react-icons/md";
import { UserAuth } from "../type/auth";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<UserAuth | null>(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch("api/auth/session");
        if (!response.ok) throw new Error("Failed to fetch session");
        const data = await response.json();
        console.log("Session data:", data);
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch session", error);
        setUser(null);
      }
    };
    fetchSession();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="relative ">
      <div className="flex justify-between items-center h-16 w-full pb-2 bg-green-700">
        <div className="basic-2/6  ">
          <img
            className="w-52 ml-10 cursor-pointer"
            src="/images/logo.jpg"
            alt="logo"
          />
        </div>

        <ul className="hidden lg:flex gap-5 font-Karla">
          {/* Hiển thị thông tin người dùng nếu đã đăng nhập */}
          {user ? (
            <li className="relative">
              <div className="flex justify-center items-center gap-2 pr-8">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 bg-white text-xl pr-7"
                  >
                    <FaUserCircle />
                    <span>{user?.Hoten}</span>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li>
                      <div className="flex justify-around">
                        <a onClick={handleLogout} className="text-lg">
                          Logout
                        </a>
                        <div className="text-xl pr-9">
                          <MdOutlineLogout />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ) : (
            <>
              <div className="flex justify-around pr-5">
                <li className="nav-item whitespace-nowrap font-Karla text-white text-xl pr-5">
                  <Link href="/login">Đăng nhập</Link>
                </li>
                <li className="nav-item whitespace-nowrap font-Karla text-white text-xl">
                  <Link href="/register">Đăng ký</Link>
                </li>
              </div>
            </>
          )}
        </ul>
        <div className="lg:hidden size-5" onClick={toggleMenu}>
          <TiThMenuOutline />
        </div>
      </div>
      <div
        className={`lg:flex flex-col lg:flex-row justify-around items-center bg-white text-black z-10 pb-3 pt-3 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="bg-white w-full">
          <ul className="menu menu-horizontal flex justify-around text-slate-950 border  items-center  text-xl">
            <li className="hover:text-red-400">
              <Link href="/">Trang chủ</Link>
            </li>
            <li className="hover:text-red-400">
              <Link href="/">Nhận Nuôi</Link>
            </li>
            <li className="hover:text-red-400">
              <Link href={"/Ungho"}>Ủng hộ</Link>
            </li>
            <li className="hover:text-red-400">
              <a href="#">Sự Kiện</a>
            </li>
            <li className="hover:text-red-400">
              {" "}
              <Link href="/Productcard">Sản Phẩm</Link>{" "}
            </li>
            <li className="hover:text-red-400">
              <a href="#">Thú Y</a>
            </li>
            <li className="hover:text-red-400">
              <a href="#">Liên hệ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
