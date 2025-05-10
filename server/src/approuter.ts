import { user } from "./userrouter.ts";
import { router } from "./trpc.ts";

export const appRouter = router({
  user,
});
