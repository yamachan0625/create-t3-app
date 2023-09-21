import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const todo = createTRPCRouter({
  set: publicProcedure
    .input(z.object({ todo: z.string() }))
    .mutation(async ({ input, ctx }) => {
      // const a = ctx.prisma.todo.create({ data: input });
      await ctx.prisma.todo.create({ data: input });
    }),

  // getAll: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.todo.findMany();
  // }),
});
