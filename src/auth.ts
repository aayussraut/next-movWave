import NextAuth from "next-auth";
import "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

import authConfig from "./auth.config";
import { db } from "./lib/db";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    async signIn({ user }) {
      if (user) {
        return true;
      }
      return false;
    },
    async jwt({ token, user, account, profile }) {
      console.log("jwt", { token, user, account, profile });
      return token;
    },
    async session({ session, token, user }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      console.log("session", { session, token, user });
      return session;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
