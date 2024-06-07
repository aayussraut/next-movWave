import { v4 as uuidv4 } from "uuid";

import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";
import { db } from "./db";
import { getEmailVerificationTokenByEmail } from "@/data/email-verify-token";

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 60 * 60 * 1000);

  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    await db.passwordResetToken.delete({
      where: {
        email,
      },
    });
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });
  return passwordResetToken;
};

export const generateEmailVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 60 * 60 * 1000);

  const existingToken = await getEmailVerificationTokenByEmail(email);

  if (existingToken) {
    await db.emailVerificationToken.delete({
      where: {
        email,
      },
    });
  }

  const emailVerificationToken = await db.emailVerificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });
  return emailVerificationToken;
};
