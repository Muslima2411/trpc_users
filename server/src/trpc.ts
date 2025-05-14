
import { initTRPC } from "@trpc/server"; 
import { Context } from "./context.ts";


const t = initTRPC.context<Context>().create();

export const middleware  = t.middleware;
export const router = t.router;
export const authRouter = t.router;
export const userRouter = t.router;
export const mergeRouters = t.mergeRouters;
export const publicProcedure = t.procedure;
export const procedure  = t.procedure;