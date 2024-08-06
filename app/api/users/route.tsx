import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

// /api/users
export async function GET(request: NextRequest) {
  // NB 'request: NextRequest' // this isn't being used here, but nextjs will cache the response if not included
  const users = await prisma.user.findMany();
  return NextResponse.json(
    // [
    //   // NB can return a string
    //   { id: 1, fruit: "apples" },
    //   { id: 2, fruit: "oranges" },
    // ]
    users
  );
}

export async function POST(request: NextRequest) {
  // POSTMAN: body -> raw -> json
  const body = await request.json();
  const validation = schema.safeParse(body);

  const user = await prisma.user.findUnique({
    // need await!
    where: {
      email: body.email,
    },
  });

  if (user) {
    return NextResponse.json(
      { error: "User with this email exists" },
      { status: 400 }
    );
  }

  if (!validation.success)
    // falsy inc. empty string
    return NextResponse.json(validation.error.errors, { status: 400 }); // not seeing validation message on Postman

  const newUser = await prisma.user.create({
    // body // dangerous
    data: {
      name: body.name,
      email: body.email,
      // other fields have default values
    },
  });

  return NextResponse.json(newUser, { status: 201 }); // auto sends 200, 201 means created
}
