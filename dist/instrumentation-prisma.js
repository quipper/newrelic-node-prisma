"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instrumentationPrisma = void 0;
const instrumentationPrisma = (shim, prisma) => {
    shim.setDatastore('Prisma');
    shim.recordQuery(prisma.PrismaClient.prototype, '_executeRequest', {
        query: (_shim, _fn, _name, args) => {
            const params = args[0];
            const query = {
                operation: params.action,
                query: `${params.clientMethod} ${JSON.stringify(params.args)}`,
                collection: params.model,
            };
            return JSON.stringify(query);
        },
        record: true,
        promise: true,
    });
    shim.setParser((query) => {
        return JSON.parse(query);
    });
};
exports.instrumentationPrisma = instrumentationPrisma;
