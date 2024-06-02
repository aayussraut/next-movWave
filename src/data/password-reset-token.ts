import { db } from "@/lib/db";

export const getPasswordResetTokenByEmail = async (email: string) => {
  const token = await db.passwordResetToken.findFirst({
    where: {
      email,
    },
  });
  return token;
};
