import { z } from "zod";

export const snippetSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(10, "Title must be at most 10 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description must be at most 1000 characters"),
  tags: z.array(z.string()).min(1, "Tags must be at least 1 "),
  language: z.enum(["javascript"]),
  code: z.string().min(10, "Code must be at least 10 characters"),
});

export type ISnippetSchema = z.infer<typeof snippetSchema>;
