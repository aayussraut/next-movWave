import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";

import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

import { getUserByEmail } from "./data/user";
import { LoginSchema } from "./schema";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = await LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);

          if (!user || !user.password) {
            return null;
          }

          const comparePassword = await bcrypt.compare(password, user.password);

          if (comparePassword) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
