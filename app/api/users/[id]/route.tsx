import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
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

export async function PUT( // PUT - replace, PATCH: update properties
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    // Mosh checks body before checking for user
    return NextResponse.json({ error: "User Not Found", status: 404 });

  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json({ id: params.id, name: body.name }); // ToDo status not working here
}

export function DELETE(
  request: NextResponse,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User Not Found", status: 404 });
  // delete user fetch from db, 404 if found, delete, return 200
  return NextResponse.json({}); // optionally return deleted obj - preference
}
