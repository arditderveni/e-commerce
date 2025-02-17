import { z } from "zod";

const signupSchema = z
  .object({
    name: z.string().min(3),
    surname: z.string().min(3),
    email: z.string().email(),
    password: z
      .string()
      .min(6)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: z.string().min(6),
    birthDate: z
      .date()
      .refine((date) => {
        const today = new Date();
        return date <= today;
      }, "Birth date cannot be in the future")
      .refine((date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        if (month === 1 && day === 29) {
          return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        }
        return true;
      }, "Invalid date"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default signupSchema;
