import { NextResponse } from "next/server";


export async function GET() {
  const users = ['user1', 'user2', 'user3'];

  return NextResponse.json(users);
}