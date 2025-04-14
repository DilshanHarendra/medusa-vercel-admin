"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@medusajs/framework/http");
const validators_1 = require("./admin/menu/validators");
const validators_2 = require("./admin/post/validators");
const route_1 = require("./admin/reviews/route");
const validators_3 = require("./admin/reviews/validators");
const route_2 = require("./admin/reviews/status/route");
const route_3 = require("./store/products/[id]/reviews/route");
exports.default = (0, http_1.defineMiddlewares)({
    routes: [
        {
            matcher: "/admin/menu",
            method: "POST",
            middlewares: [
                // @ts-ignore
                (0, http_1.validateAndTransformBody)(validators_1.MenuSchema),
            ],
        },
        {
            matcher: "/admin/post",
            method: "POST",
            middlewares: [
                // @ts-ignore
                (0, http_1.validateAndTransformBody)(validators_2.BlogPostSchema),
            ],
        },
        {
            matcher: "/admin/post/:id",
            method: "PUT",
            middlewares: [
                // @ts-ignore
                (0, http_1.validateAndTransformBody)(validators_2.BlogPostSchema),
            ],
        },
        {
            method: ["POST"],
            matcher: "/store/reviews",
            middlewares: [
                (0, http_1.authenticate)("customer", ["session", "bearer"]),
                (0, http_1.validateAndTransformBody)(validators_3.PostStoreReviewSchema),
            ],
        },
        {
            matcher: "/admin/reviews",
            method: ["GET"],
            middlewares: [
                (0, http_1.validateAndTransformQuery)(route_1.GetAdminReviewsSchema, {
                    isList: true,
                    defaults: [
                        "id",
                        "title",
                        "content",
                        "rating",
                        "product_id",
                        "customer_id",
                        "status",
                        "created_at",
                        "updated_at",
                        "product.*",
                    ],
                }),
            ],
        },
        {
            matcher: "/admin/reviews/status",
            method: ["POST"],
            middlewares: [
                (0, http_1.validateAndTransformBody)(route_2.PostAdminUpdateReviewsStatusSchema),
            ],
        },
        {
            matcher: "/store/products/:id/reviews",
            methods: ["GET"],
            middlewares: [
                (0, http_1.validateAndTransformQuery)(route_3.GetStoreReviewsSchema, {
                    isList: true,
                    defaults: [
                        "id",
                        "rating",
                        "title",
                        "first_name",
                        "last_name",
                        "content",
                        "created_at",
                    ],
                }),
            ],
        },
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBSWlDO0FBQ2pDLHdEQUFtRDtBQUNuRCx3REFBc0Q7QUFDdEQsaURBQTREO0FBQzVELDJEQUFpRTtBQUNqRSx3REFBZ0Y7QUFDaEYsK0RBQTBFO0FBRTFFLGtCQUFlLElBQUEsd0JBQWlCLEVBQUM7SUFDN0IsTUFBTSxFQUFFO1FBQ0o7WUFDSSxPQUFPLEVBQUUsYUFBYTtZQUN0QixNQUFNLEVBQUUsTUFBTTtZQUNkLFdBQVcsRUFBRTtnQkFDVCxhQUFhO2dCQUNiLElBQUEsK0JBQXdCLEVBQUMsdUJBQVUsQ0FBQzthQUN2QztTQUNKO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsYUFBYTtZQUN0QixNQUFNLEVBQUUsTUFBTTtZQUNkLFdBQVcsRUFBRTtnQkFDVCxhQUFhO2dCQUNiLElBQUEsK0JBQXdCLEVBQUMsMkJBQWMsQ0FBQzthQUMzQztTQUNKO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsV0FBVyxFQUFFO2dCQUNULGFBQWE7Z0JBQ2IsSUFBQSwrQkFBd0IsRUFBQywyQkFBYyxDQUFDO2FBQzNDO1NBQ0o7UUFDRDtZQUNJLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNoQixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLFdBQVcsRUFBRTtnQkFDVCxJQUFBLG1CQUFZLEVBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUMvQyxJQUFBLCtCQUF3QixFQUFDLGtDQUFxQixDQUFDO2FBQ2xEO1NBQ0o7UUFDRDtZQUNJLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2YsV0FBVyxFQUFFO2dCQUNULElBQUEsZ0NBQXlCLEVBQUMsNkJBQXFCLEVBQUU7b0JBQzdDLE1BQU0sRUFBRSxJQUFJO29CQUNaLFFBQVEsRUFBRTt3QkFDTixJQUFJO3dCQUNKLE9BQU87d0JBQ1AsU0FBUzt3QkFDVCxRQUFRO3dCQUNSLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixRQUFRO3dCQUNSLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixXQUFXO3FCQUNkO2lCQUNKLENBQUM7YUFDTDtTQUNKO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsdUJBQXVCO1lBQ2hDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNoQixXQUFXLEVBQUU7Z0JBQ1QsSUFBQSwrQkFBd0IsRUFBQywwQ0FBa0MsQ0FBQzthQUMvRDtTQUNKO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsNkJBQTZCO1lBQ3RDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNoQixXQUFXLEVBQUU7Z0JBQ1QsSUFBQSxnQ0FBeUIsRUFBQyw2QkFBcUIsRUFBRTtvQkFDN0MsTUFBTSxFQUFFLElBQUk7b0JBQ1osUUFBUSxFQUFFO3dCQUNOLElBQUk7d0JBQ0osUUFBUTt3QkFDUixPQUFPO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxTQUFTO3dCQUNULFlBQVk7cUJBQ2Y7aUJBQ0osQ0FBQzthQUNMO1NBQ0o7S0FHSjtDQUNKLENBQUMsQ0FBQSJ9