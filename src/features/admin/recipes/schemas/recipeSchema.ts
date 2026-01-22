import { z } from "zod";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const createRecipeSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    ingredients: z.array(z.string()).min(1, "At least one ingredient is required"),
    instructions: z.array(z.string()).min(1, "At least one instruction is required"),
    level: z.enum(["Easy", "Intermediate", "Hard"]),
    cookTime: z.coerce.number().positive("Cook time must be positive"),
    servings: z.coerce.number().positive("Servings must be positive"),
    premium: z.boolean().default(false),
    image: z
        .any()
        .refine((file) => file instanceof File, "Image is required")
        .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
        .refine(
            (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),
});

export type CreateRecipeSchema = z.infer<typeof createRecipeSchema>;

export const updateRecipeSchema = createRecipeSchema.omit({ image: true });

export type UpdateRecipeSchema = z.infer<typeof updateRecipeSchema>;
