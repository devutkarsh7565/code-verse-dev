import { z } from "zod";
export const tagModalSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(10, "Name must be at most 10 characters"),
  })
  .required();

export type ITagModalSchema = z.infer<typeof tagModalSchema>;
