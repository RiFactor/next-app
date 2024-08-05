import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { error } from "console";

export function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: number };
  }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({
    id: params.id, // ToDo make number
    name: "existing product",
    price: 5,
  }); //
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({
    id: params.id,
    name: body.name,
    price: body.price,
  });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({});
}
