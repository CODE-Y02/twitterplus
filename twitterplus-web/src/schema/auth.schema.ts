import z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().trim().min(4),
});

export type TLoginSchema = z.infer<typeof loginSchema>;

export const signupSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string().trim().min(4),
});

export type TSignupSchema = z.infer<typeof signupSchema>;
