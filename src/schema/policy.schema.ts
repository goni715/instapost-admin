import { z } from "zod";

export const policySchema = z.object({
  content: z.string().min(1, "Description is required"),
});
