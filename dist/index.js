"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
const newrelic_1 = __importDefault(require("newrelic"));
const instrumentation_prisma_1 = require("./instrumentation-prisma");
newrelic_1.default.instrumentDatastore('@prisma/client', instrumentation_prisma_1.instrumentationPrisma);
