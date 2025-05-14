import { CreateNextContextOptions } from "@trpc/server/adapters/next";

export const createContext = ({req}: CreateNextContextOptions) => {
    return {success: true}
}




export type Context =  ReturnType<typeof createContext>