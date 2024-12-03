import { ReturnJson } from "@repo/constructors/prismadb.js";
import { NextResponse } from "next/server";

export function GET() {

    // @yet-to-implement
    // Implement verify logic

    return NextResponse.json(new ReturnJson(200, true, "Pending...", {}));

}