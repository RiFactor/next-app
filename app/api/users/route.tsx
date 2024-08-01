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
