import { z } from "zod";

export const DemoSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(10, "Name must be at most 10 characters"),
  email: z.string().email("Invalid email"),
});

export type IDemoSchema = z.infer<typeof DemoSchema>;
