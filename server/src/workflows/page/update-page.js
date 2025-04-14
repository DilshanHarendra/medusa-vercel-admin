"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePageWorkflow = exports.updatePage = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const page_1 = require("../../modules/page");
const Const_1 = require("../../admin/helper/Const");
exports.updatePage = (0, workflows_sdk_1.createStep)('update-page-step', async (input, { container }) => {
    const pageModuleService = container.resolve(page_1.PAGE_MODULE);
    let url_handle = input.payload.urlHandle;
    if (input.payload.urlHandle.includes(Const_1.REPLACE_ID)) {
        url_handle = input.id;
    }
    // @ts-ignore
    const post = await pageModuleService.updatePages({
        selector: { id: input.id },
        data: {
            ...input.payload,
            page_title: input.payload.pageTitle,
            meta_description: input.payload.metaDescription,
            url_handle: url_handle
        }
    });
    const formattedPost = {
        ...post,
        pageTitle: post.page_title,
        metaDescription: post.meta_description,
        urlHandle: post.url_handle
    };
    // @ts-ignore
    delete formattedPost.page_title;
    // @ts-ignore
    delete formattedPost.meta_description;
    // @ts-ignore
    delete formattedPost.url_handle;
    // @ts-ignore
    delete formattedPost.created_at;
    // @ts-ignore
    delete formattedPost.updated_at;
    // @ts-ignore
    delete formattedPost.deleted_at;
    return new workflows_sdk_1.StepResponse(formattedPost, post.id);
});
exports.updatePageWorkflow = (0, workflows_sdk_1.createWorkflow)('update-page', (input) => {
    const page = (0, exports.updatePage)(input);
    return new workflows_sdk_1.WorkflowResponse(page);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3BhZ2UvdXBkYXRlLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBSzBDO0FBQzFDLDZDQUErQztBQUcvQyxvREFBb0Q7QUFJdkMsUUFBQSxVQUFVLEdBQUcsSUFBQSwwQkFBVSxFQUNoQyxrQkFBa0IsRUFDbEIsS0FBSyxFQUFFLEtBQWdDLEVBQUMsRUFBQyxTQUFTLEVBQUMsRUFBQyxFQUFFO0lBQ2xELE1BQU0saUJBQWlCLEdBQXNCLFNBQVMsQ0FBQyxPQUFPLENBQzFELGtCQUFXLENBQ2QsQ0FBQTtJQUVELElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFBO0lBQ3hDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFVLENBQUMsRUFBQyxDQUFDO1FBQzlDLFVBQVUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFBO0lBQ3pCLENBQUM7SUFHRCxhQUFhO0lBQ2IsTUFBTSxJQUFJLEdBQWlCLE1BQU0saUJBQWlCLENBQUMsV0FBVyxDQUFDO1FBQzNELFFBQVEsRUFBQyxFQUFDLEVBQUUsRUFBQyxLQUFLLENBQUMsRUFBRSxFQUFDO1FBQ3RCLElBQUksRUFBQztZQUNELEdBQUcsS0FBSyxDQUFDLE9BQU87WUFDaEIsVUFBVSxFQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUztZQUNsQyxnQkFBZ0IsRUFBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQWU7WUFDOUMsVUFBVSxFQUFDLFVBQVU7U0FDeEI7S0FDSixDQUFDLENBQUE7SUFFRixNQUFNLGFBQWEsR0FBSTtRQUNuQixHQUFHLElBQUk7UUFDUCxTQUFTLEVBQUMsSUFBSSxDQUFDLFVBQVU7UUFDekIsZUFBZSxFQUFDLElBQUksQ0FBQyxnQkFBZ0I7UUFDckMsU0FBUyxFQUFDLElBQUksQ0FBQyxVQUFVO0tBQzVCLENBQUE7SUFFRCxhQUFhO0lBQ2IsT0FBTyxhQUFhLENBQUMsVUFBVSxDQUFBO0lBQy9CLGFBQWE7SUFDYixPQUFPLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQTtJQUNyQyxhQUFhO0lBQ2IsT0FBTyxhQUFhLENBQUMsVUFBVSxDQUFBO0lBQy9CLGFBQWE7SUFDYixPQUFPLGFBQWEsQ0FBQyxVQUFVLENBQUE7SUFDL0IsYUFBYTtJQUNiLE9BQU8sYUFBYSxDQUFDLFVBQVUsQ0FBQTtJQUMvQixhQUFhO0lBQ2IsT0FBTyxhQUFhLENBQUMsVUFBVSxDQUFBO0lBRS9CLE9BQU8sSUFBSSw0QkFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDbkQsQ0FBQyxDQUNKLENBQUE7QUFJWSxRQUFBLGtCQUFrQixHQUFHLElBQUEsOEJBQWMsRUFDNUMsYUFBYSxFQUNiLENBQUMsS0FBK0IsRUFBQyxFQUFFO0lBQy9CLE1BQU0sSUFBSSxHQUFFLElBQUEsa0JBQVUsRUFBQyxLQUFLLENBQUMsQ0FBQTtJQUM3QixPQUFPLElBQUksZ0NBQWdCLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDckMsQ0FBQyxDQUNKLENBQUEifQ==