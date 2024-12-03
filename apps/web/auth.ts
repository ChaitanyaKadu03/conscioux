import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { prisma, prismaAdapter } from "@repo/prismadb/prisma"
import axios from "axios"

export const { handlers, signIn, signOut, auth }: any = NextAuth({
    adapter: prismaAdapter(prisma),
    providers: [Google],
    pages: {
        signIn: "/auth/signin"
    },
    callbacks: {
        async session(params) {
            try {
                const respose2 = await new Promise((resolve) => setTimeout(() => { resolve(true) }, 1000))
                console.log("something happened! response2-", respose2)
                return params.session
            } catch (err) {
                return params.session
            }
        }
    }
})