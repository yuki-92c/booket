import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [Google],
  // callbacks: {
  //   async redirect() {
  //     // ログイン後に /setUserName にリダイレクト
  //     return "/setUserName";
  //   },
  // },
  // secret: process.env.AUTH_SECRET,
	callbacks: {
		session: ({ session, token }) => {
			session.user.id = token.sub as string;
      // console.log("session.user.id", session.user.id);
			return session;
		},
    async redirect() {
      return "/setUserName";
    }
	},
});

