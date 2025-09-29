import * as zod from "zod";

export const AuthSchema = zod.object({
  name: zod
    .string()
    .min(3, { message: "Too short" })
    .max(15, { message: "Too long" })
    .regex(/^[A-Za-z]+$/, {
      message: "only latin characters are allowed",
    }),
});
