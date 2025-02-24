"use client";
import LoginFormSchema from "@/app/zodschema/zodlogin/route";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);
    const formValues = {
      UserName: formData.get("UserName") as string,
      MatKhau: formData.get("MatKhau") as string,
    };

    const result = LoginFormSchema.safeParse(formValues);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const data = await res.json();
      console.log("API response data:", data);

      if (!res.ok) {
        throw new Error(data.error || "Đăng nhập thất bại");
      }
      toast.success("Đăng nhập thành công");
      console.log("Login response:", data);

      // Check if the user object and vaitro property exist
      if (data.user && data.user.vaitro) {
        console.log("User role:", data.user.vaitro);
        if (data.user.vaitro === "user") {
          console.log("Redirecting to /user");
          router.push("/user");
        } else {
          console.log("Redirecting to /");
          router.push("/");
        }
      } else {
        console.error("User role not found in response:", data);
        setError("User role not found");
        toast.error("User role not found");
      }
      router.refresh();
    } catch (error: any) {
      console.error("Login error:", error);
      setError(error.message);
      toast.error(error.message);
    }
  }

  return (
    <div className="flex gap-10 bg-gray-200 w-full min-h-screen items-center justify-center">
      <div className="flex items-center justify-center">
        <a href="/" title="Về trang chủ">
          <img
            src="https://cdn.discordapp.com/attachments/1300816466379014237/1343127462845874217/image.png?ex=67bc246d&is=67bad2ed&hm=06978354166f049bdb6238e81e7bfec133126f140c52a2bfe6a8ee0df888e8c5&"
            alt="logo"
            width={400}
            height={400}
          />
        </a>
      </div>

      <div className="flex justify-center items-center flex-col gap-5 w-[600px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl text-blue-900 font-bold">
            ĐĂNG NHẬP TÀI KHOẢN
          </h1>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="mb-4">
              <input
                type="Username"
                className="w-[400px] rounded-lg p-2"
                placeholder="Tên đăng nhập"
                name="UserName"
              />
            </div>
            <div className="mb-4">
              <input
                type="Password"
                className="w-[400px] rounded-lg p-2"
                placeholder="Password"
                name="MatKhau"
              />
            </div>

            <div className="flex justify-center mt-2">
              <button
                className="btn bg-green-700 text-white w-[400px]"
                type="submit"
              >
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
        <div className="text-center mt-4">
          <div className="w-full text-sm">
            <a href="/register" className="text-blue-600 hover:underline">
              Need an account? Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
