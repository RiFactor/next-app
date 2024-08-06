import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

// NB: make sure yarn dev running + check which local host is open! 3000 ... 3002

export async function GET(request: NextRequest) {
  const products = await prisma.products.findMany({});

  return NextResponse.json(
    products
    // or array of objs
  );
}

// ToDo work out this
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const product = await prisma.products.findUnique({
    where: {
      name: body.name, // NB: must be @unique in schema.prisma
    },
  });

  if (product) {
    return NextResponse.json("Product already exists", { status: 400 });
  }

  const newProduct = await prisma.products.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(
    newProduct, // ...body // unsafe here for extra properties
    { status: 201 }
  );
}
