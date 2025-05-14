import { userRouter } from './trpc.ts';
import { z } from "zod"
import { db } from "./db.ts"
import { publicProcedure, router } from "./trpc.ts"
import { TRPCError } from '@trpc/server';

const usersSchema = z.array(z.object({
    id: z.number(),
    name: z.string(),
    age: z.number(),
    email: z.string()
}))
const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    age: z.number(),
    email: z.string()
})

// type user = z.infer<typeof usersSchema>

export const user = userRouter({
    getAllUsers: publicProcedure.output(usersSchema).query((opts) => {

        return db.user.findMany()
    }),
    getUserById: publicProcedure.input(z.object({id: z.number()})).output(userSchema).query((opts) => {

        const user = db.user.findById(opts.input.id)

        if(!user){
            throw new TRPCError({code: "NOT_FOUND", message: 'fdfhskdfjsdkf'})
        }

        return user
    })
})