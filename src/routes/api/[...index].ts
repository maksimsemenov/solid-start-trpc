import { APIEvent } from 'solid-start/api'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '~/lib/router'

export const GET = (event: APIEvent) =>
	fetchRequestHandler({
		endpoint: '',
		req: event.request,
		router: appRouter,
		createContext: () => ({})
	})
export const POST = (event: APIEvent) =>
	fetchRequestHandler({
		endpoint: '',
		req: event.request,
		router: appRouter,
		createContext: () => ({})
	})
