"use client";
import RegisterFormSchema from "@/app/zodschema/zodregister/route";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const RegisterForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const formData = new FormData(event.currentTarget);
    const formValues = {
      email: formData.get("email") as string,
      UserName: formData.get("UserName") as string,
      MatKhau: formData.get("MatKhau") as string,
      Hoten: formData.get("Hoten") as string,
      phone: formData.get("phone") as string,
    };
    const result = RegisterFormSchema.safeParse(formValues);
    if (!result.success) {
      setError(result.error.issues[0].message);
      toast.error(result.error.issues[0].message); // Hiển thị toast lỗi
      console.log(result);
      return;
    }
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(formValues),
      });

      if (!res.ok) {
        throw new Error("Đăng ký thất bại");
      }
      toast.success("Đăng ký thành công"); // Hiển thị toast thành công
      router.push("/login");
    } catch (error: any) {
      // setError(error.message);
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
      <div className="flex justify-center items-center  flex-col gap-5 w-[600px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl text-blue-900 font-bold">
            ĐĂNG KÝ TÀI KHOẢN
          </h1>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="mb-4">
              <input
                type="text"
                className="w-[400px] rounded-lg p-2"
                placeholder="Tên đăng nhập"
                name="UserName"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="w-[400px] rounded-lg p-2"
                placeholder="Password"
                name="MatKhau"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-[400px] rounded-lg p-2"
                placeholder="Họ tên"
                name="Hoten"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-[400px] rounded-lg p-2"
                placeholder="Số điện thoại"
                name="phone"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="w-[400px] rounded-lg p-2"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="flex justify-center mt-2">
              <button
                type="submit"
                className="btn bg-green-700 text-white w-[400px]"
              >
                Tạo tài khoản
              </button>                                                                                                                                                                                                                                                                                                                                                
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
