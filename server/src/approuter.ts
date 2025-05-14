import { user } from './userrouter.ts';
import { mergeRouters} from "./trpc.ts";
import { auth } from './authrouter.ts';





export const appRouter = mergeRouters(
   user,
   auth
)



export type AppRouter = typeof appRouter;



