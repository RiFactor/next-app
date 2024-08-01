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
