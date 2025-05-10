import { z } from "zod";
import { checkAuth } from "./middleware.ts";
import { authRouter, Procedure } from "./trpc.ts";

const protectedProcedure = Procedure.use(checkAuth);
const loginSchema = z.object({
    username: z.string().min(2, {message: "Username must be at least 2 characters long"}),
    password: z.string().min(8, {message: "Password must be at least 8 characters long"}),
  })

 
const auth = authRouter({
  login: protectedProcedure.input(loginSchema).output(z.object({
    token: z.string(),
  }))
});