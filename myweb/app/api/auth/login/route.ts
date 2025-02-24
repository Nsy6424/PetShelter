import { login } from "@/app/lib/auth";
import LoginFormSchema from "@/app/zodschema/zodlogin/route";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = LoginFormSchema.safeParse(body);
    if (!result.success) {
      const errorMessages = result.error.issues
        .map((issue) => issue.message)
        .join(", ");
      return NextResponse.json({ error: errorMessages }, { status: 400 });
    }

    const { UserName, MatKhau } = result.data;

    // Authenticate user
    const user = await login(UserName, MatKhau);

    if (!user) {
      return NextResponse.json(
        { error: "Tên đăng nhập hoặc mật khẩu không đúng" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { user, message: "Đăng nhập thành công" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Đã xảy ra lỗi khi xử lý yêu cầu" },
      { status: 500 }
    );
  }
}
