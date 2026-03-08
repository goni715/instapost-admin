import z from "zod";

export const changePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .trim()
      .min(1, "Current Password is required")
      .min(6, "Current Password must be at least 6 characters long")
      .max(100, "Current Password is too long"),
    newPassword: z
      .string()
      .trim()
      .min(1, "New Password is required")
      .min(6, "New Password must be at least 6 characters long")
      .max(100, "New Password is too long"),
    confirmPassword: z
      .string()
      .trim()
      .min(1, "Confirm Password is required")
      .min(6, "Confirm Password must be at least 6 characters long")
      .max(100, "Confirm Password is too long"),
  })
  .superRefine((data, ctx) => {
    if (data.newPassword !== data.confirmPassword) {
      ctx.addIssue({
        path: ["confirmPassword"],
        message: "Passwords do not match",
        code: z.ZodIssueCode.custom,
      });
    }
    if (data.newPassword === data.currentPassword) {
      ctx.addIssue({
        path: ["newPassword"],
        message: "New password must be different from the current password.",
        code: z.ZodIssueCode.custom,
      });
    }
  });
