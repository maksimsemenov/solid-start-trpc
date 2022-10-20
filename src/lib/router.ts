import { initTRPC } from '@trpc/server'

const t = initTRPC.create()
export const appRouter = t.router({
	ping: t.procedure.query(() => {
		return 'ping'
	}),
	pong: t.procedure.mutation(() => {
		return 'pong'
	})
})

export type AppRouter = typeof appRouter
