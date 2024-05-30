import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  name: z.string().min(1, {
    message: "Username is required",
  }),
});
