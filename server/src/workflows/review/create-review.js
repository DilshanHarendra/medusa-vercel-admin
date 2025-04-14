"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReviewWorkflow = exports.createReviewStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const review_1 = require("../../modules/review");
const core_flows_1 = require("@medusajs/medusa/core-flows");
exports.createReviewStep = (0, workflows_sdk_1.createStep)("create-review", async (input, { container }) => {
    const reviewModuleService = container.resolve(review_1.PRODUCT_REVIEW_MODULE);
    const review = await reviewModuleService.createReviews(input);
    return new workflows_sdk_1.StepResponse(review, review.id);
}, async (reviewId, { container }) => {
    if (!reviewId) {
        return;
    }
    const reviewModuleService = container.resolve(review_1.PRODUCT_REVIEW_MODULE);
    await reviewModuleService.deleteReviews(reviewId);
});
exports.createReviewWorkflow = (0, workflows_sdk_1.createWorkflow)("create-review", (input) => {
    // Check product exists
    // @ts-ignore
    (0, core_flows_1.useQueryGraphStep)({
        entity: "product",
        fields: ["id"],
        filters: {
            id: input.product_id,
        },
        options: {
            throwIfKeyNotFound: true,
        },
    });
    // Create the review
    const review = (0, exports.createReviewStep)(input);
    // @ts-ignore
    return new workflows_sdk_1.WorkflowResponse({
        review,
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXJldmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvcmV2aWV3L2NyZWF0ZS1yZXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBSzBDO0FBQzFDLGlEQUE0RDtBQUc1RCw0REFBK0Q7QUFFbEQsUUFBQSxnQkFBZ0IsR0FBRyxJQUFBLDBCQUFVLEVBQ3RDLGVBQWUsRUFDZixLQUFLLEVBQUUsS0FBNEIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDbEQsTUFBTSxtQkFBbUIsR0FBK0IsU0FBUyxDQUFDLE9BQU8sQ0FDckUsOEJBQXFCLENBQ3hCLENBQUE7SUFFRCxNQUFNLE1BQU0sR0FBRyxNQUFNLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUU3RCxPQUFPLElBQUksNEJBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQzlDLENBQUMsRUFDRCxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDWixPQUFNO0lBQ1YsQ0FBQztJQUVELE1BQU0sbUJBQW1CLEdBQStCLFNBQVMsQ0FBQyxPQUFPLENBQ3JFLDhCQUFxQixDQUN4QixDQUFBO0lBRUQsTUFBTSxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDckQsQ0FBQyxDQUNKLENBQUE7QUFHWSxRQUFBLG9CQUFvQixHQUFHLElBQUEsOEJBQWMsRUFDOUMsZUFBZSxFQUNmLENBQUMsS0FBd0IsRUFBRSxFQUFFO0lBQ3pCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsSUFBQSw4QkFBaUIsRUFBQztRQUNkLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztRQUNkLE9BQU8sRUFBRTtZQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsVUFBVTtTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNMLGtCQUFrQixFQUFFLElBQUk7U0FDM0I7S0FDSixDQUFDLENBQUE7SUFFRixvQkFBb0I7SUFDcEIsTUFBTSxNQUFNLEdBQUcsSUFBQSx3QkFBZ0IsRUFBQyxLQUFLLENBQUMsQ0FBQTtJQUV0QyxhQUFhO0lBQ2IsT0FBTyxJQUFJLGdDQUFnQixDQUFDO1FBQ3hCLE1BQU07S0FDVCxDQUFDLENBQUE7QUFDTixDQUFDLENBQ0osQ0FBQSJ9