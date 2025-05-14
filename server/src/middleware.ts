import { TRPCError } from "@trpc/server";
import { middleware } from "./trpc.ts";

export const checkAuth = middleware(({ctx, next}) => {

    if(!ctx.success) {
        throw new TRPCError({code: "UNAUTHORIZED", message: "fksd fndskjjd"})
    }

    return next({
        ctx: {
            token: 'fdgusfskjfsdjk'
        }
    })
})