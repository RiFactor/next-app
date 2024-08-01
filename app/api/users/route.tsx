import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // request: NextRequest // this isn't being called but nextjs will cache the response if not included
  return NextResponse.json([
    // can return a string
    { id: 1, fruit: "apples" },
    { id: 2, fruit: "oranges" },
  ]);
}
