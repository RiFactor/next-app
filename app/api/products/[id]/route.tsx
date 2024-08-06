import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { error } from "console";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.products.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json(product);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.products.findUnique({
    where: {
      id: parseInt(params.id), // ToDo make sure name doesn't already exist
    },
  });

  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const updatedProduct = await prisma.products.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(updatedProduct);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const paramId = parseInt(params.id);

  const product = await prisma.products.findUnique({
    where: {
      id: paramId,
    },
  });

  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  const deletedProduct = await prisma.products.delete({
    where: {
      id: paramId,
    },
  });
  return NextResponse.json({});
}
