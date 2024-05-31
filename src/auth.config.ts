import type { NextAuthConfig } from "next-auth";

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

          const passwordMatch = user.password === password;

          if (passwordMatch) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;