import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// GET method to fetch pets
export async function GET(request: NextRequest) {
  try {
    const pets = await prisma.pet.findMany();
    return NextResponse.json(
      { pets, message: "Danh Sach Thu Cung" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching pets:", error);
    return NextResponse.json(
      { error: "Failed to fetch pets", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const se = await prisma.pet.findFirst({ where: { name: body.name } });
    if (se == null) {
      const newPet = await prisma.pet.create({
        data: {
          name: body.name,
          breed: body.breed,
          color: body.color,
          age: body.age,
          gender: body.gender,
          code: body.code,
          vaccination: body.vaccination,
          personality: body.personality,
          image: body.image,
        },
      });
      return NextResponse.json(
        { newPet, message: "Tạo pet thành công" },
        { status: 201 }
      );
    } else {
      return NextResponse.json({ message: "Pet đã tồn tại" }, { status: 400 });
    }
  } catch (error: any) {
    console.error("Error creating field:", error);
    return NextResponse.json(
      {
        message: "Tạo pet thất bại",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
// PUT method to update an existing pet
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    const updatedPet = await prisma.pet.update({
      where: { id },
      data: updateData,
    });
    return NextResponse.json(
      { updatedPet, message: "Pet updated successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating pet:", error);
    return NextResponse.json(
      { error: "Failed to update pet", details: error.message },
      { status: 500 }
    );
  }
}
// API Pets - Thêm một endpoint để lấy màu sắc
export async function GET_COLORS(request: NextRequest) {
  try {
    const colors = await prisma.pet.findMany({
      select: { color: true },
      distinct: ["color"],
    });
    const uniqueColors = colors.map((pet) => pet.color);
    return NextResponse.json(
      { colors: uniqueColors, message: "Danh sách màu sắc" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching colors:", error);
    return NextResponse.json(
      { error: "Failed to fetch colors", details: error.message },
      { status: 500 }
    );
  }
}
