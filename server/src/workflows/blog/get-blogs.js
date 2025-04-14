"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogWorkflow = exports.getBlogs = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const blog_1 = require("../../modules/blog");
exports.getBlogs = (0, workflows_sdk_1.createStep)('get-blog-step', async (id, { container }) => {
    const blogModuleService = container.resolve(blog_1.BLOG_MODULE);
    let filter = {};
    if (id) {
        filter = { id };
    }
    const blogs = await blogModuleService.listBlogs(filter, {});
    return new workflows_sdk_1.StepResponse(blogs);
});
exports.getBlogWorkflow = (0, workflows_sdk_1.createWorkflow)('get-blogs', (input) => {
    const blogs = (0, exports.getBlogs)(input);
    return new workflows_sdk_1.WorkflowResponse({ blogs });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWJsb2dzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9ibG9nL2dldC1ibG9ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBNEc7QUFDNUcsNkNBQThDO0FBSWpDLFFBQUEsUUFBUSxHQUFHLElBQUEsMEJBQVUsRUFDOUIsZUFBZSxFQUNmLEtBQUssRUFBRSxFQUFTLEVBQUMsRUFBQyxTQUFTLEVBQUMsRUFBQyxFQUFFO0lBQzNCLE1BQU0saUJBQWlCLEdBQXNCLFNBQVMsQ0FBQyxPQUFPLENBQzFELGtCQUFXLENBQ2QsQ0FBQTtJQUNELElBQUksTUFBTSxHQUFDLEVBQUUsQ0FBQTtJQUNiLElBQUksRUFBRSxFQUFDLENBQUM7UUFDSixNQUFNLEdBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQTtJQUNmLENBQUM7SUFFRCxNQUFNLEtBQUssR0FBRyxNQUFNLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUMsRUFBRSxDQUFDLENBQUE7SUFDMUQsT0FBTyxJQUFJLDRCQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDbEMsQ0FBQyxDQUNKLENBQUE7QUFJWSxRQUFBLGVBQWUsR0FBRyxJQUFBLDhCQUFjLEVBQ3pDLFdBQVcsRUFDWCxDQUFDLEtBQVksRUFBQyxFQUFFO0lBQ1osTUFBTSxLQUFLLEdBQUUsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7QUFDeEMsQ0FBQyxDQUNKLENBQUEifQ==