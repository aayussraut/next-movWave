"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { NewPasswordSchema } from "@/schema";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token: string | null
) => {
  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { password } = validatedFields.data;

  if (!token) {
    return { error: "Invalid Token" };
  }

  const exisitingToken = await getPasswordResetTokenByToken(token);

  if (!exisitingToken) {
    return { error: "Invalid Token!" };
  }

  if (new Date(exisitingToken.expires) < new Date()) {
    return { error: "Token Expired!" };
  }

  const existingUser = await getUserByEmail(exisitingToken.email);

  const hashedPassword = await bcrypt.hash(password, 10);

  if (!existingUser) {
    return { error: "User not found!" };
  }

  await db.user.update({
    where: {
      email: exisitingToken.email,
    },
    data: {
      password: hashedPassword,
    },
  });

  await db.passwordResetToken.delete({
    where: {
      token,
    },
  });

  return { success: "Password Updated!" };
};
