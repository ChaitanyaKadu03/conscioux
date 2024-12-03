import { prisma } from "@repo/prismadb/prisma";
import { NextRequest, NextResponse } from "next/server";
import { ReturnJson } from "@repo/constructors/prismadb.js";

export async function POST(req: NextRequest) {

  // Abstract the session id from the cookies
  const sessionToken: string | undefined = req.cookies.get("authjs.session-token")?.value;

  if (!sessionToken) {
    return NextResponse.json(new ReturnJson(401, false, "The session token was not found", {}));
  };

  // Abstract the userid from the session model
  const session = await prisma.session.findUnique({ where: { sessionToken: sessionToken } });

  if (!session) {
    return NextResponse.json(new ReturnJson(401, false, "The session model for the session token was not found", { sessionToken }));
  }

  const userId: string | undefined = session?.userId;

  if (!userId) {
    return NextResponse.json(new ReturnJson(502, false, "The userId was not found", {}));
  }

  // @yet-to-implement
  // Make sure if the transaction failed the error is thrown
  // Initiate the transition
  try {
    await prisma.$transaction(async (tx) => {
      // Create a Settings model
      await tx.settings.create({ data: { userId } });

      // Create a Profile model
      await tx.profile.create({ data: { userId } });

    })
  } catch (err) {
    return NextResponse.json(new ReturnJson(502, false, "Creating settings/profile model failed!", { error: err }));
  }
  // End the transition

  return NextResponse.json(new ReturnJson(200, true, "The user was signup successfull!", {}));
}