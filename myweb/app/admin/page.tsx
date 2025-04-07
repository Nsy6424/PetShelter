"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Barchart from "./components/UserChart";
import UserChart from "./components/UserChart";
import PetTable from "./components/PetTable";

const Pageadmin = () => {
  const [permissionAdmin, setPermissionAdmin] = useState<string>("");
  const router = useRouter();

  return (
    <div className="flex">
      <div className="flex-1">
        <Navbar />
        <div className="flex ">
          <Sidebar setPermissionAdmin={setPermissionAdmin} />
          {permissionAdmin === "dashboard" ? (
            <Dashboard />
          ) : permissionAdmin === "pet" ? (
            <PetTable></PetTable>
          ) : (
            <Dashboard />
          )}
        </div>
      </div>
    </div>
  );
};

export default Pageadmin;
