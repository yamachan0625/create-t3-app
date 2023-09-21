import { createTRPCRouter } from '~/server/api/trpc';
import { todo } from '~/server/api/routers/todo';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  todo,
});

// export type definition of API
export type AppRouter = typeof appRouter;
