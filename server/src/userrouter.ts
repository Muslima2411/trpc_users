import { z } from "zod";
import { publicProcedure, router } from "./trpc.ts"; // Ensure `router` is imported correctly
import { db } from "./db.ts";

const usersSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    age: z.number(),
    email: z.string(),
  })
);

export const user = router({
  getAllUsers: publicProcedure
    .output(usersSchema)
    .query((opts) => {
      console.log(opts);
      return db.user.findMany();
    }),

  getUserById: publicProcedure
    .input(z.object({ id: z.number() }))
    .output(usersSchema)
    .query((opts) => {
      const { id } = opts.input;
      return db.user.findUnique(id);
    }
  ),
});