"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
(0, utils_1.loadEnv)(process.env.NODE_ENV || 'development', process.cwd());
module.exports = (0, utils_1.defineConfig)({
    projectConfig: {
        databaseDriverOptions: { connection: { ssl: { rejectUnauthorized: false } } },
        databaseUrl: "postgres://avnadmin:AVNS_csKd2Bw2aiUrFmhnzJA@medusa-admin-natashahettiarachchi84-3157.k.aivencloud.com:21919/defaultdb?sslmode=require",
        http: {
            storeCors: process.env.STORE_CORS,
            adminCors: process.env.ADMIN_CORS,
            authCors: process.env.AUTH_CORS,
            jwtSecret: process.env.JWT_SECRET || "supersecret",
            cookieSecret: process.env.COOKIE_SECRET || "supersecret",
        }
    },
    modules: [
        {
            resolve: "@medusajs/medusa/event-bus-redis",
            options: {
                redisUrl: process.env.EVENTS_REDIS_URL,
            },
        },
        {
            resolve: "./src/modules/menu"
        },
        {
            resolve: "./src/modules/blog"
        },
        {
            resolve: "./src/modules/productWidget"
        },
        {
            resolve: "./src/modules/review",
        },
        {
            resolve: "./src/modules/page"
        },
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkdXNhLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21lZHVzYS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBaUU7QUFFakUsSUFBQSxlQUFPLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0FBRTdELE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBQSxvQkFBWSxFQUFDO0lBQzVCLGFBQWEsRUFBRTtRQUNiLHFCQUFxQixFQUNqQixFQUFFLFVBQVUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDMUQsV0FBVyxFQUFFLHdJQUF3STtRQUNySixJQUFJLEVBQUU7WUFDSixTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFXO1lBQ2xDLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVc7WUFDbEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBVTtZQUNoQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksYUFBYTtZQUNsRCxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLElBQUksYUFBYTtTQUN6RDtLQUNGO0lBQ0QsT0FBTyxFQUFDO1FBQ047WUFDRSxPQUFPLEVBQUUsa0NBQWtDO1lBQzNDLE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0I7YUFDeEM7U0FDRjtRQUNEO1lBQ0UsT0FBTyxFQUFDLG9CQUFvQjtTQUM3QjtRQUNEO1lBQ0UsT0FBTyxFQUFDLG9CQUFvQjtTQUM3QjtRQUNEO1lBQ0UsT0FBTyxFQUFDLDZCQUE2QjtTQUN0QztRQUNEO1lBQ0UsT0FBTyxFQUFFLHNCQUFzQjtTQUNoQztRQUNEO1lBQ0UsT0FBTyxFQUFDLG9CQUFvQjtTQUM3QjtLQUNGO0NBQ0YsQ0FBQyxDQUFBIn0=