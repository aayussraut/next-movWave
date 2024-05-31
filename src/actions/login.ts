"use server";
import * as z from "zod";
import { AuthError } from "next-auth";
import bcrypt from "bcryptjs";

import { LoginSchema } from "../schema";
import { getUserByEmail } from "../data/user";
import { signIn } from "@/auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { email, password, code } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Invalid Credentials!" };
  }

  const comparePassword = await bcrypt.compare(password, existingUser.password);

  if (!comparePassword) {
    return { error: "Invalid Credentials!" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
