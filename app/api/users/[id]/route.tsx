import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// /api/users/4
export async function GET(
  request: NextResponse,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user)
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT( // PUT - replace, PATCH: update properties
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!user)
    // Mosh checks body before checking for user
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });

  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const updatedUser = await prisma.user.update({
    where: { id: parseInt(params.id) },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser); // ToDo status not working here
}

export function DELETE(
  request: NextResponse,
  { params }: { params: { id: string } }
) {
  const paramId = parseInt(params.id);

  if (paramId > 10)
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });
  // delete user fetch from db, 404 if found, delete, return 200
  return NextResponse.json({}); // optionally return deleted obj - preference
}
