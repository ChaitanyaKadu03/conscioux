import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import {prisma, prismaAdapter} from "@repo/postgresqldb/prisma"

export const { handlers, signIn, signOut, auth }: any = NextAuth({
    adapter: prismaAdapter(prisma),
    providers: [Google],
})