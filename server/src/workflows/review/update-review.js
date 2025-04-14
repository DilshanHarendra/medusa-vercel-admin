"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReviewWorkflow = exports.updateReviewsStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const review_1 = require("../../modules/review");
exports.updateReviewsStep = (0, workflows_sdk_1.createStep)("update-review-step", async (input, { container }) => {
    const reviewModuleService = container.resolve(review_1.PRODUCT_REVIEW_MODULE);
    // Get original review before update
    const originalReviews = await reviewModuleService.listReviews({
        id: input.map((review) => review.id),
    });
    const reviews = await reviewModuleService.updateReviews(input);
    return new workflows_sdk_1.StepResponse(reviews, originalReviews);
}, async (originalData, { container }) => {
    if (!originalData) {
        return;
    }
    const reviewModuleService = container.resolve(review_1.PRODUCT_REVIEW_MODULE);
    // Restore original review status
    await reviewModuleService.updateReviews(originalData);
});
exports.updateReviewWorkflow = (0, workflows_sdk_1.createWorkflow)("update-review", (input) => {
    const reviews = (0, exports.updateReviewsStep)(input);
    return new workflows_sdk_1.WorkflowResponse({
        reviews,
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXJldmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvcmV2aWV3L3VwZGF0ZS1yZXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBSzBDO0FBQzFDLGlEQUE0RDtBQU8vQyxRQUFBLGlCQUFpQixHQUFHLElBQUEsMEJBQVUsRUFDdkMsb0JBQW9CLEVBQ3BCLEtBQUssRUFBRSxLQUE2QixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNuRCxNQUFNLG1CQUFtQixHQUErQixTQUFTLENBQUMsT0FBTyxDQUNyRSw4QkFBcUIsQ0FDeEIsQ0FBQTtJQUVELG9DQUFvQztJQUNwQyxNQUFNLGVBQWUsR0FBRyxNQUFNLG1CQUFtQixDQUFDLFdBQVcsQ0FBQztRQUMxRCxFQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztLQUN2QyxDQUFDLENBQUE7SUFFRixNQUFNLE9BQU8sR0FBRyxNQUFNLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUU5RCxPQUFPLElBQUksNEJBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUE7QUFDckQsQ0FBQyxFQUNELEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNoQixPQUFNO0lBQ1YsQ0FBQztJQUVELE1BQU0sbUJBQW1CLEdBQStCLFNBQVMsQ0FBQyxPQUFPLENBQ3JFLDhCQUFxQixDQUN4QixDQUFBO0lBRUQsaUNBQWlDO0lBQ2pDLE1BQU0sbUJBQW1CLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQ3pELENBQUMsQ0FDSixDQUFBO0FBT1ksUUFBQSxvQkFBb0IsR0FBRyxJQUFBLDhCQUFjLEVBQzlDLGVBQWUsRUFDZixDQUFDLEtBQXdCLEVBQUUsRUFBRTtJQUN6QixNQUFNLE9BQU8sR0FBRyxJQUFBLHlCQUFpQixFQUFDLEtBQUssQ0FBQyxDQUFBO0lBRXhDLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQztRQUN4QixPQUFPO0tBQ1YsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUNKLENBQUEifQ==