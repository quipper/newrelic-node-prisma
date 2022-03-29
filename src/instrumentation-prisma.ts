/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return */
import type { getPrismaClient } from '@prisma/client/runtime/index'
type ConstructorOf<T> = T extends new (...args: any[]) => infer V ? V : never

// 内部の型で export されていないため強引に作り出しています。
type InternalRequestParams = Parameters<
  ConstructorOf<ReturnType<typeof getPrismaClient>>['_request']
>[0]

export const instrumentationPrisma = (
  shim: any,
  prisma: typeof import('@prisma/client'),
) => {
  shim.setDatastore('Prisma')

  shim.recordQuery(prisma.PrismaClient.prototype, '_executeRequest', {
    query: (
      _shim: any,
      _fn: any,
      _name: string,
      args: [InternalRequestParams],
    ) => {
      const params = args[0]
      const query = {
        operation: params.action,
        query: `${params.clientMethod} ${JSON.stringify(params.args)}`,
        collection: params.model,
      }
      return JSON.stringify(query)
    },
    record: true,
    promise: true,
  })
  shim.setParser((query: string) => {
    return JSON.parse(query)
  })
}
