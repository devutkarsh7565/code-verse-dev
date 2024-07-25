import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(3, "Email must be at least 3 characters")
    .max(25, "Email must be at most 10 characters"),
  password: z
    .string()
    .min(3, "Password must be at least 3 characters")
    .max(10, "Password must be at most 10 characters"),
});

export type ILoginSchema = z.infer<typeof loginSchema>;
