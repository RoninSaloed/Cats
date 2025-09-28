import * as zod from "zod";

export const AuthSchema = zod.object({
  email: zod.string().email({ message: "is not valid email" }),
  password: zod.string().min(8, { message: "is too  short password" }),
});
