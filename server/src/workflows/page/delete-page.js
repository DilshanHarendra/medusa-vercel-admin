"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePageWorkflow = exports.deletePage = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const page_1 = require("../../modules/page");
exports.deletePage = (0, workflows_sdk_1.createStep)('delete-page-step', async (input, { container }) => {
    const pageModuleService = container.resolve(page_1.PAGE_MODULE);
    const page = await pageModuleService.deletePages(input);
    return new workflows_sdk_1.StepResponse(page);
});
exports.deletePageWorkflow = (0, workflows_sdk_1.createWorkflow)('delete-page', (input) => {
    (0, exports.deletePage)(input);
    return new workflows_sdk_1.WorkflowResponse({ message: "ok" });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3BhZ2UvZGVsZXRlLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTRHO0FBRTVHLDZDQUErQztBQUdsQyxRQUFBLFVBQVUsR0FBRyxJQUFBLDBCQUFVLEVBQ2hDLGtCQUFrQixFQUNsQixLQUFLLEVBQUUsS0FBWSxFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsRUFBRTtJQUM5QixNQUFNLGlCQUFpQixHQUFzQixTQUFTLENBQUMsT0FBTyxDQUMxRCxrQkFBVyxDQUNkLENBQUE7SUFDRCxNQUFNLElBQUksR0FBRyxNQUFNLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN2RCxPQUFPLElBQUksNEJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNqQyxDQUFDLENBQ0osQ0FBQTtBQUlZLFFBQUEsa0JBQWtCLEdBQUcsSUFBQSw4QkFBYyxFQUM1QyxhQUFhLEVBQ2IsQ0FBQyxLQUFZLEVBQUMsRUFBRTtJQUNaLElBQUEsa0JBQVUsRUFBQyxLQUFLLENBQUMsQ0FBQTtJQUNqQixPQUFPLElBQUksZ0NBQWdCLENBQUMsRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQTtBQUMvQyxDQUFDLENBQ0osQ0FBQSJ9