"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Sidebar from "./components/Sidebar";
import UserTable from "./components/UserTable";
import Dashboard from "./components/Dashboard";
import Barchart from "./components/UserChart";
import UserChart from "./components/UserChart";

const Page = () => {
  const [permissionAdmin, setPermissionAdmin] = useState<string>("");
  const router = useRouter();

  return (
    <div className="flex">
      <div className="flex-1">
        <Navbar />
        <div className="flex">
          <Sidebar setPermissionAdmin={setPermissionAdmin} />
          {permissionAdmin === "dashsboard" ? (
            <Dashboard />
          ) : permissionAdmin === "users" ? (
            <UserTable />
          ) : (
            <UserChart></UserChart>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
