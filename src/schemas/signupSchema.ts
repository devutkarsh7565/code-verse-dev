import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(10, "Name must be at most 10 characters"),
  email: z
    .string()
    .min(3, "Email must be at least 3 characters")
    .max(30, "Email must be at most 10 characters"),
  password: z
    .string()
    .min(3, "Password must be at least 3 characters")
    .max(10, "Password must be at most 10 characters"),
});

export type ISignupSchema = z.infer<typeof signupSchema>;
