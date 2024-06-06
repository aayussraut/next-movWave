"use server";

import { getEmailVerificationTokenByToken } from "@/data/email-verify-token";
import { db } from "@/lib/db";

export const emailVerification = async (token: string) => {
  if (!token) {
    return { error: "Invalid Token" };
  }

  const exisitingToken = await getEmailVerificationTokenByToken(token);

  if (!exisitingToken) {
    return { error: "Invalid Token!" };
  }

  if (new Date(exisitingToken.expires) < new Date()) {
    return { error: "Token Expired!" };
  }
  await db.user.update({
    where: {
      email: exisitingToken.email,
    },
    data: {
      emailVerified: new Date(new Date().getTime()),
    },
  });

  await db.emailVerificationToken.delete({
    where: {
      token,
    },
  });

  return { success: "Email Verified Successfully!" };
};
