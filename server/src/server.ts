import { createContext } from './context.ts';
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { appRouter } from "./approuter.ts";
import cors from 'cors';


const PORT = 4000;


const server = createHTTPServer({
    router: appRouter,
    createContext,
    middleware: cors()
})



server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    
})