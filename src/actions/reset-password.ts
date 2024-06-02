"use server";
import * as z from "zod";

import { getUserByEmail } from "@/data/user";
import { ResetPasswordSchema } from "@/schema";
import { generatePasswordResetToken } from "@/lib/token";
import { sendMail } from "@/lib/mail";

export const resetPassword = async (
  values: z.infer<typeof ResetPasswordSchema>
) => {
  const validatedFields = ResetPasswordSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { email } = validatedFields.data;
  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "User not found!" };
  }

  const token = await generatePasswordResetToken(email);

  await sendMail(
     email,
    "Reset Password",
    `Click here to reset your password: ${process.env.NEXT_PUBLIC_URL}/auth/new-password?token=${token.token}`,
  );

  return { success: "Reset Email Sent" };
};
