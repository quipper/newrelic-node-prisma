/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
import newrelic from 'newrelic'
import { instrumentationPrisma } from './instrumentation-prisma'

newrelic.instrumentDatastore('@prisma/client', instrumentationPrisma)
