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
  try {
    const body = await request.json();
    const newUsers = await prisma.user.create({
      data: {
        UserName: body.UserName,
        Hoten: body.Hoten,
        email: body.Email,
        phone: body.Phone,
      },
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
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
