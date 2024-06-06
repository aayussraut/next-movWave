import { db } from "@/lib/db";

export const getEmailVerificationTokenByEmail = async (email: string) => {
  try {
    const emailVerificationToken = await db.emailVerificationToken.findFirst({
      where: {
        email,
      },
    });
    return emailVerificationToken;
  } catch (e) {
    return null;
  }
};

export const getEmailVerificationTokenByToken = async (token: string) => {
  try {
    const emailVerificationToken = await db.emailVerificationToken.findFirst({
      where: {
        token,
      },
    });
    return emailVerificationToken;
  } catch (e) {
    return null;
  }
};
