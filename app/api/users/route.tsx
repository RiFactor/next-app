import { NextRequest, NextResponse } from "next/server";

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
  // ToDo - not working (on Postman) // body -> raw -> json
  const body = await request.json();
  // Validate
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 }); // auto sends 200, 201 means created
}
