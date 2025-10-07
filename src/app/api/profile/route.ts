import { NextResponse } from "next/server";
import { profile } from "@/data/profile";

export async function GET() {
  // simulate a small API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  return NextResponse.json(profile);
}
