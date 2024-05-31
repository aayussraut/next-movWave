import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";

import Credentials from "next-auth/providers/credentials";

import { getUserByEmail } from "./data/user";
import { LoginSchema } from "./schema";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = await LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);

          if (!user) {
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
