"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostWorkflow = exports.deletePost = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const blog_1 = require("../../modules/blog");
exports.deletePost = (0, workflows_sdk_1.createStep)('delete-post-step', async (input, { container }) => {
    const blogModuleService = container.resolve(blog_1.BLOG_MODULE);
    const post = await blogModuleService.deleteBlogPosts(input);
    return new workflows_sdk_1.StepResponse(post);
});
exports.deletePostWorkflow = (0, workflows_sdk_1.createWorkflow)('delete-post', (input) => {
    (0, exports.deletePost)(input);
    return new workflows_sdk_1.WorkflowResponse({ message: "ok" });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXBvc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2Jsb2cvZGVsZXRlLXBvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTRHO0FBRTVHLDZDQUErQztBQUdsQyxRQUFBLFVBQVUsR0FBRyxJQUFBLDBCQUFVLEVBQ2hDLGtCQUFrQixFQUNsQixLQUFLLEVBQUUsS0FBWSxFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsRUFBRTtJQUM5QixNQUFNLGlCQUFpQixHQUFzQixTQUFTLENBQUMsT0FBTyxDQUMxRCxrQkFBVyxDQUNkLENBQUE7SUFDRCxNQUFNLElBQUksR0FBRyxNQUFNLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMzRCxPQUFPLElBQUksNEJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNqQyxDQUFDLENBQ0osQ0FBQTtBQUlZLFFBQUEsa0JBQWtCLEdBQUcsSUFBQSw4QkFBYyxFQUM1QyxhQUFhLEVBQ2IsQ0FBQyxLQUFZLEVBQUMsRUFBRTtJQUNSLElBQUEsa0JBQVUsRUFBQyxLQUFLLENBQUMsQ0FBQTtJQUNyQixPQUFPLElBQUksZ0NBQWdCLENBQUMsRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQTtBQUMvQyxDQUFDLENBQ0osQ0FBQSJ9