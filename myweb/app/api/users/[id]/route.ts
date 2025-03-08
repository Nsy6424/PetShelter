import { USER_NOT_EXIST } from "@/app/zodschema/zod-schema/constants";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

//1.getUserByID - dua tren id tra ve thong tin cua user
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = parseInt(params.id); // Convert Id to a number
  const users = await prisma.user.findUnique({ where: { id: userId } });

  return NextResponse.json(
    { users, message: `User with ID :  ${params.id}` },
    { status: 200 }
  );
}
//2.deleteUserById - Xoa user dua tren id
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = Number(params.id); // Convert Id to a number
  //Try catch : dùng để bắt dữ liệu
  try {
    const DeleteId = await prisma.user.delete({ where: { id: userId } });
    return NextResponse.json({ DeleteId }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error_code: USER_NOT_EXIST.error_code, cause: USER_NOT_EXIST.message },
      //Xuất exception
      //USER_NOT_EXIST: đối tượng định hướng bên constants.ts
      { status: 200 }
    );
  }
}
//3.updateUserById - cap nhat du lieu cho user theo id (du lieu moi trong request body)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const userId = parseInt(params.id); // Convert Id to a number
  const PutId = await prisma.user.update({
    where: { id: userId },
    data: { UserName: "Quang Syyewae" },
  });

  if (PutId == null) {
    return NextResponse.json(
      { PutId, message: `Update ID ${params.id} ` },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ error: "Dữ liệu đã tồn tại" }, { status: 200 });
  }
}
