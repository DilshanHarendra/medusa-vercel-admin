"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPageWorkflow = exports.createPage = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const page_1 = require("../../modules/page");
const Const_1 = require("../../admin/helper/Const");
exports.createPage = (0, workflows_sdk_1.createStep)('create-page-step', async (input, { container }) => {
    const pageModuleService = container.resolve(page_1.PAGE_MODULE);
    const post = await pageModuleService.createPages({
        ...input,
        page_title: input.pageTitle,
        meta_description: input.metaDescription,
        url_handle: input.urlHandle
    });
    if (post.url_handle.includes(Const_1.REPLACE_ID)) {
        const url_handle = post.url_handle.replace(Const_1.REPLACE_ID, post.id);
        pageModuleService.updatePages({
            selector: {
                id: post.id
            },
            data: {
                url_handle
            }
        });
        post.url_handle = url_handle;
    }
    // @ts-ignore
    post.pageTitle = post.page_title;
    // @ts-ignore
    post.metaDescription = post.meta_description;
    // @ts-ignore
    post.urlHandle = post.url_handle;
    // @ts-ignore
    delete post.page_title;
    // @ts-ignore
    delete post.meta_description;
    // @ts-ignore
    delete post.url_handle;
    // @ts-ignore
    delete post.created_at;
    // @ts-ignore
    delete post.updated_at;
    // @ts-ignore
    delete post.deleted_at;
    return new workflows_sdk_1.StepResponse(post, post.id);
});
exports.createPageWorkflow = (0, workflows_sdk_1.createWorkflow)('create-page', (input) => {
    const page = (0, exports.createPage)(input);
    return new workflows_sdk_1.WorkflowResponse(page);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3BhZ2UvY3JlYXRlLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBSzBDO0FBQzFDLDZDQUErQztBQUcvQyxvREFBb0Q7QUFJdkMsUUFBQSxVQUFVLEdBQUcsSUFBQSwwQkFBVSxFQUNoQyxrQkFBa0IsRUFDbEIsS0FBSyxFQUFFLEtBQVksRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLEVBQUU7SUFDOUIsTUFBTSxpQkFBaUIsR0FBc0IsU0FBUyxDQUFDLE9BQU8sQ0FDMUQsa0JBQVcsQ0FDZCxDQUFBO0lBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7UUFDN0MsR0FBRyxLQUFLO1FBQ1IsVUFBVSxFQUFDLEtBQUssQ0FBQyxTQUFTO1FBQzFCLGdCQUFnQixFQUFDLEtBQUssQ0FBQyxlQUFlO1FBQ3RDLFVBQVUsRUFBQyxLQUFLLENBQUMsU0FBUztLQUM3QixDQUFDLENBQUE7SUFDRixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGtCQUFVLENBQUMsRUFBQyxDQUFDO1FBQ3RDLE1BQU0sVUFBVSxHQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGtCQUFVLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzdELGlCQUFpQixDQUFDLFdBQVcsQ0FBQztZQUMxQixRQUFRLEVBQUM7Z0JBQ0wsRUFBRSxFQUFDLElBQUksQ0FBQyxFQUFFO2FBQ2I7WUFDRCxJQUFJLEVBQUM7Z0JBQ0QsVUFBVTthQUNiO1NBQ0osQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBQyxVQUFVLENBQUE7SUFDOUIsQ0FBQztJQUlELGFBQWE7SUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDaEMsYUFBYTtJQUNiLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFBO0lBQzVDLGFBQWE7SUFDYixJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUE7SUFFOUIsYUFBYTtJQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUN0QixhQUFhO0lBQ2IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUE7SUFDNUIsYUFBYTtJQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUN0QixhQUFhO0lBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQ3RCLGFBQWE7SUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDdEIsYUFBYTtJQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUd0QixPQUFPLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQzFDLENBQUMsQ0FDSixDQUFBO0FBSVksUUFBQSxrQkFBa0IsR0FBRyxJQUFBLDhCQUFjLEVBQzVDLGFBQWEsRUFDYixDQUFDLEtBQVcsRUFBQyxFQUFFO0lBQ1gsTUFBTSxJQUFJLEdBQUUsSUFBQSxrQkFBVSxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNyQyxDQUFDLENBQ0osQ0FBQSJ9