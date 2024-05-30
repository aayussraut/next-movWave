"use server";
import * as z from "zod";
import { LoginSchema } from "../schema";
import { getUserByEmail } from "../data/user";

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

  if (existingUser.password !== password) {
    return { error: "Invalid Credentials!" };
  }

  console.log("User logged in!");
  return { success: "User logged in!" };
};
