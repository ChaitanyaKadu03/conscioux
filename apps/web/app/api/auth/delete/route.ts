import { ReturnJson } from "@repo/constructors/prismadb.js";
import { prisma } from "@repo/prismadb/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {

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
    console.log(1)

    try {
        await prisma.$transaction(async (tx) => {
            
            console.log(2)
            // Deleting the user model
            await tx.user.delete({ where: { id: userId } });
            
            // Deleting the profile model
            await tx.profile.delete({ where: { userId: userId } });
            
            // Deleting the settings model
            await tx.settings.delete({ where: { userId: userId } });
            
            
            // @yet-to-implement
            // Deleting the account model            
            // Deleting the session model
            // Deleting the VerificationToken model
            // Deleting the authenticator model

            // NOTE⚠️: check out schema.prisma => onDelete: Cascade 
        })

    } catch (err) {
        return NextResponse.json(new ReturnJson(502, false, "Deleting user/settings/profile.. model failed!", { error: err }));
    }
    // End the transition

    console.log(3)

    return NextResponse.json(new ReturnJson(200, true, "The user account was deleted successfull!", {}));

}