import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// /api/users
export function GET(request: NextRequest) {
  // 'request: NextRequest' // this isn't being used here, but nextjs will cache the response if not included
  return NextResponse.json([
    // can return a string
    { id: 1, fruit: "apples" },
    { id: 2, fruit: "oranges" },
  ]);
}

export async function POST(request: NextRequest) {
  // POSTMAN: body -> raw -> json
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    // falsy inc. empty string
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json(
    {
      id: 1, // db should create id
      name: body.name,
    },
    { status: 201 }
  ); // auto sends 200, 201 means created
}
