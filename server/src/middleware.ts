import { TRPCError } from "@trpc/server";
import { middleware } from "./trpc.ts";

export const checkAuth = middleware(({ctx, next})=>{
    if (!ctx.success){
        throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "You are not authorized to access this resource",
        });
    }

    return next({
      ctx: {
        token: "aaaa",
      }
    });
});