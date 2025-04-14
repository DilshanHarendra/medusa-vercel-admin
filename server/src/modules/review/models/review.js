"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const Review = utils_1.model.define("review", {
    id: utils_1.model.id().primaryKey(),
    title: utils_1.model.text().nullable(),
    content: utils_1.model.text(),
    rating: utils_1.model.float(),
    first_name: utils_1.model.text(),
    last_name: utils_1.model.text(),
    status: utils_1.model.enum(["pending", "approved", "rejected"]).default("pending"),
    product_id: utils_1.model.text().index("IDX_REVIEW_PRODUCT_ID"),
    customer_id: utils_1.model.text().nullable(),
})
    .checks([
    {
        name: "rating_range",
        expression: (columns) => `${columns.rating} >= 1 AND ${columns.rating} <= 5`,
    },
]);
exports.default = Review;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcmV2aWV3L21vZGVscy9yZXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBaUQ7QUFFakQsTUFBTSxNQUFNLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7SUFDbEMsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsS0FBSyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDOUIsT0FBTyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDckIsTUFBTSxFQUFFLGFBQUssQ0FBQyxLQUFLLEVBQUU7SUFDckIsVUFBVSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDeEIsU0FBUyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDdkIsTUFBTSxFQUFFLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUMxRSxVQUFVLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztJQUN2RCxXQUFXLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUN2QyxDQUFDO0tBQ0csTUFBTSxDQUFDO0lBQ0o7UUFDSSxJQUFJLEVBQUUsY0FBYztRQUNwQixVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sYUFBYSxPQUFPLENBQUMsTUFBTSxPQUFPO0tBQy9FO0NBQ0osQ0FBQyxDQUFBO0FBRU4sa0JBQWUsTUFBTSxDQUFBIn0=