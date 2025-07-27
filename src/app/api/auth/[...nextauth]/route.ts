// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const mockUser = {
          id: "123",
          email: credentials.email,
          name: "Test User"
        };

        if (credentials.email === "test@test.com" && credentials.password === "password") {
          return mockUser;
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
  }
});

export { handler as GET, handler as POST };