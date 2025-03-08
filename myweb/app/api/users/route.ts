import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { emitWarning } from "process";
import { z } from "zod";

// 1. Lấy tất cả các users
export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json({ users, message: "OK" }, { status: 200 });
}

// 2. Thêm mới một users vào db
export async function POST(request: NextRequest) {
  // a. Lấy dữ liệu do người dùng gửi lên
  const body = await request.json();

  // b. Kiểm tra dữ liệu có hợp lệ không  (zod đảm nhận: )
  // Định nghĩa để Zod biết được đối tượng bao gồm những trường nào,
  // Các ràng buộc (constraint) tương ứng với mỗi trường (field)
  const UserSchema = z.object({
    email: z.string().email({ message: "Email không hợp lệ" }),
    name: z
      .string()
      .min(8, { message: "Tên cần dài hơn hoặc bằng 8 kí tự" })
      .max(255, { message: "Tên có độ dài tối đa là 255 kí tự" }),
  });

  // Thực hiện việc check
  const userValidateCheck = UserSchema.safeParse({
    email: body.email,
    name: body.name,
  });
  // b1. Nếu dữ liệu không hợp lệ thì báo lỗi (trả về lỗi)
  if (!userValidateCheck.success) {
    return NextResponse.json(userValidateCheck.error.errors, { status: 200 });
  } else {
    // b2. Nếu dữ liệu hợp lệ
    // Kiểm tra tính duy nhất của email
    // Truy vấn trong db xem có email trùng với email chỉ định không
    // Nếu có thì báo lỗi
    const ue = await prisma.user.findUnique({
      where: {
        email: body.email,
        UserName: body.userName,
      },
    });

    if (ue == null) {
      // cho phép thêm vào db
      // Nếu không thì tiến hành thêm
      // c. Tiến hành thêm mới dữ liệu vào DB sử dụng prisma client
      const user = await prisma.user.create({
        data: {
          email: body.email,
          UserName: body.name,
        },
      });
      // d. Trả về kết quả là dữ liệu vừa được tạo cùng với status: 201
      return NextResponse.json(
        { user, message: "Thêm mới thành công" },
        { status: 201 }
      );
    } else {
      // Báo lỗi
      return NextResponse.json(
        { error: "Email này đã tồn tại trong DB" },
        { status: 200 }
      );
    }
  }
}

// 3. Xóa tất cả các users
export async function DELETE() {
  const users = await prisma.user.findMany();

  return NextResponse.json(
    { users, message: "Xoa Thanh Cong" },
    { status: 200 }
  );
}
