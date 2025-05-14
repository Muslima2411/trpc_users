import { z } from "zod";
import { checkAuth } from "./middleware.ts";
import { authRouter, procedure } from "./trpc.ts";
import { TRPCError } from "@trpc/server/unstable-core-do-not-import";
import { db } from "./db.ts";

const protectedProcedure = procedure.use(checkAuth)

const loginSchema = z.object({
    userName: z.string().min(2, {message: "username should be at least 2 characters"}),
    password: z.string().min(8)
})

export const auth = authRouter({
    login: protectedProcedure.input(loginSchema).output(z.object({token: z.string()})).mutation((opts) => {

        const {userName, password} = opts.input;
        const user = db.auth.checkPassword(userName, password)
        if (!user) {
            throw new TRPCError({
                code: 'BAD_REQUEST',
                message: 'Invalid credentials' 
            })
        }
        return {token: 'fgdlkjsgklds'}
    })
})