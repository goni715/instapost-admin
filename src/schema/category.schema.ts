import { z } from "zod";

export const createCategorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .regex(/^[^0-9]*$/, {
      message: "Name cannot contain numbers",
    })
    .regex(/^[^~!@#$%\^*\+\?><=;:"]*$/, {
      message:
        'Name cannot contain special characters: ~ ! @ # $ % ^ * + ? > < = ; : "',
    }),
  image: z
    .instanceof(File, { message: "Please select an image" })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "Image size must be 5MB or less",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "image/webp", "image/jpg"].includes(
          file.type,
        ),
      { message: "Only .jpg, .jpeg, .png, or .webp formats are allowed" },
    ),
});

export const updateCategorySchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .trim()
    .regex(/^[^0-9]*$/, {
      message: "Name cannot contain numbers",
    })
    .regex(/^[^~!@#$%\^*\+\?><=;:"]*$/, {
      message:
        'Name cannot contain special characters: ~ ! @ # $ % ^ * + ? > < = ; : "',
    }),
  image: z
    .any()
    .optional()
    .refine((file) => !file || file instanceof File, "Invalid file format")
    .refine(
      (file) => !file || file.size <= 5 * 1024 * 1024,
      "Image size must be 5MB or less",
    )
    .refine(
      (file) =>
        !file ||
        ["image/jpeg", "image/png", "image/webp", "image/jpg"].includes(
          file.type,
        ),
      "Only .jpg, .jpeg, .png, or .webp formats are allowed",
    ),
});
