import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { stat } from "fs";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: "1",
      name: "milk",
      price: 0.8,
    },
    { id: "2", name: "bread", price: 1.5 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json(
    { id: 5, name: body.name, price: body.price }, // ...body // unsafe here for extra properties
    { status: 201 }
  );
}
