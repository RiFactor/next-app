import { NextRequest, NextResponse } from "next/server";
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// /api/users/4
export function GET(
  request: NextResponse,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User Not Found", status: 404 });

  return NextResponse.json({ id: params.id, name: "user" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User Not Found", status: 404 });

  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  return NextResponse.json({ id: params.id, name: body.name });
}
