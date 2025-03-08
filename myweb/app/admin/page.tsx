"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Sidebar from "./components/Sidebar";
import UserTable from "./components/UserTable";
import { getSession } from "../lib/auth";

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const session = await getSession();
      if (!session) {
        router.push("/login"); // Chuyển hướng đến trang đăng nhập nếu không có session
      }
    };
    checkAuth();
  }, [router]);

  return (
    <div className="flex">
      <Navbar />
      <Sidebar />
      <UserTable />
    </div>
  );
};

export default AdminPage;
