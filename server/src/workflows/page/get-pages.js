"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageWorkflow = exports.getPages = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const page_1 = require("../../modules/page");
exports.getPages = (0, workflows_sdk_1.createStep)('get-page-step', async (input, { container }) => {
    const pageModuleService = container.resolve(page_1.PAGE_MODULE);
    let filter = {};
    if (input?.id) {
        filter = { id: input.id };
    }
    if (input?.slug) {
        filter = {
            url_handle: input.slug,
            visibility: true
        };
    }
    let blogs = await pageModuleService.listPages(filter, {});
    // @ts-ignore
    blogs = blogs.map(item => {
        return {
            id: item.id,
            content: item.content,
            metaDescription: item.meta_description,
            pageTitle: item.page_title,
            title: item.title,
            urlHandle: item.url_handle,
            visibility: item.visibility
        };
    });
    return new workflows_sdk_1.StepResponse(blogs);
});
exports.getPageWorkflow = (0, workflows_sdk_1.createWorkflow)('get-pages', (input) => {
    const pages = (0, exports.getPages)(input);
    return new workflows_sdk_1.WorkflowResponse({ pages });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBhZ2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9wYWdlL2dldC1wYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBNEc7QUFDNUcsNkNBQThDO0FBS2pDLFFBQUEsUUFBUSxHQUFHLElBQUEsMEJBQVUsRUFDOUIsZUFBZSxFQUNmLEtBQUssRUFBRSxLQUFtQixFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsRUFBRTtJQUNyQyxNQUFNLGlCQUFpQixHQUFzQixTQUFTLENBQUMsT0FBTyxDQUMxRCxrQkFBVyxDQUNkLENBQUE7SUFDRCxJQUFJLE1BQU0sR0FBQyxFQUFFLENBQUE7SUFDYixJQUFJLEtBQUssRUFBRSxFQUFFLEVBQUMsQ0FBQztRQUNYLE1BQU0sR0FBQyxFQUFDLEVBQUUsRUFBQyxLQUFLLENBQUMsRUFBRSxFQUFDLENBQUE7SUFDeEIsQ0FBQztJQUNELElBQUksS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ2IsTUFBTSxHQUFDO1lBQ0gsVUFBVSxFQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ3JCLFVBQVUsRUFBQyxJQUFJO1NBQ2xCLENBQUE7SUFDTCxDQUFDO0lBRUQsSUFBSSxLQUFLLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3hELGFBQWE7SUFDYixLQUFLLEdBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUEsRUFBRTtRQUNuQixPQUFPO1lBQ0gsRUFBRSxFQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1YsT0FBTyxFQUFDLElBQUksQ0FBQyxPQUFPO1lBQ3BCLGVBQWUsRUFBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQ3JDLFNBQVMsRUFBQyxJQUFJLENBQUMsVUFBVTtZQUN6QixLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUs7WUFDaEIsU0FBUyxFQUFDLElBQUksQ0FBQyxVQUFVO1lBQ3pCLFVBQVUsRUFBQyxJQUFJLENBQUMsVUFBVTtTQUM3QixDQUFBO0lBQ0wsQ0FBQyxDQUFDLENBQUE7SUFFRixPQUFPLElBQUksNEJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUNsQyxDQUFDLENBQ0osQ0FBQTtBQUlZLFFBQUEsZUFBZSxHQUFHLElBQUEsOEJBQWMsRUFDekMsV0FBVyxFQUNYLENBQUMsS0FBbUIsRUFBQyxFQUFFO0lBQ25CLE1BQU0sS0FBSyxHQUFFLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixPQUFPLElBQUksZ0NBQWdCLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0FBQ3hDLENBQUMsQ0FDSixDQUFBIn0=