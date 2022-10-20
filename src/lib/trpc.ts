import { createTRPCProxyClient, httpLink, loggerLink } from '@trpc/client'

import type { AppRouter } from './router'

export const client = createTRPCProxyClient<AppRouter>({
	links: [loggerLink(), httpLink({ url: '/api/trpc' })]
})
