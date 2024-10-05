import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from '@/lib/prisma';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  callbacks: {
    async redirect() {
      // ログイン後に /setUserName にリダイレクト
      return "/setUserName";
    },
  },
  // secret: process.env.AUTH_SECRET,
});
