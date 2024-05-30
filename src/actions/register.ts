"use server";
import * as z from "zod";
import { RegisterSchema } from "../schema";
import { getUserByEmail } from "../data/user";
import { db } from "../lib/db";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  console.log(validatedFields);
  if (!validatedFields.success) {
    console.log("Invalid Fields!");
    return { error: "Invalid Fields!" };
  }

  const { email, password, name } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    console.log("User already exists!");
    return { error: "User already exists!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  console.log("User created!");
  return { success: "User created!" };
};
