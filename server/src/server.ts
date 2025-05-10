import "dotenv/config";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { appRouter } from "./approuter.ts";
import { createContext } from "./context.ts";

const PORT = process.env.PORT || 4000;

const server = createHTTPServer({
  router: appRouter,
  createContext
});

server.listen(PORT, () => {
  console.log("Server is running on http://localhost:", PORT);
});