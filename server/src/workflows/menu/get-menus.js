"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenuWorkflow = exports.getMenus = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const menu_1 = require("../../modules/menu");
exports.getMenus = (0, workflows_sdk_1.createStep)('get-menus-step', async (input, { container }) => {
    const menuModuleService = container.resolve(menu_1.MENU_MODULE);
    let filter = {};
    if (input) {
        filter = { id: input };
    }
    const menu = await menuModuleService.listMenus(filter, {
        relations: ['children']
    });
    return new workflows_sdk_1.StepResponse(menu);
});
exports.getMenuWorkflow = (0, workflows_sdk_1.createWorkflow)('get-menus', (input) => {
    const menu = (0, exports.getMenus)(input);
    return new workflows_sdk_1.WorkflowResponse({ menu });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LW1lbnVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9tZW51L2dldC1tZW51cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBNEc7QUFDNUcsNkNBQThDO0FBSWpDLFFBQUEsUUFBUSxHQUFHLElBQUEsMEJBQVUsRUFDOUIsZ0JBQWdCLEVBQ2hCLEtBQUssRUFBRSxLQUFZLEVBQUMsRUFBQyxTQUFTLEVBQUMsRUFBQyxFQUFFO0lBQzlCLE1BQU0saUJBQWlCLEdBQXNCLFNBQVMsQ0FBQyxPQUFPLENBQzFELGtCQUFXLENBQ2QsQ0FBQTtJQUNELElBQUksTUFBTSxHQUFDLEVBQUUsQ0FBQTtJQUNiLElBQUksS0FBSyxFQUFDLENBQUM7UUFDUCxNQUFNLEdBQUcsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLENBQUE7SUFDdkIsQ0FBQztJQUNELE1BQU0sSUFBSSxHQUFHLE1BQU0saUJBQWlCLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQztRQUNsRCxTQUFTLEVBQUMsQ0FBQyxVQUFVLENBQUM7S0FDekIsQ0FBQyxDQUFBO0lBQ0YsT0FBTyxJQUFJLDRCQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDakMsQ0FBQyxDQUNKLENBQUE7QUFJWSxRQUFBLGVBQWUsR0FBRyxJQUFBLDhCQUFjLEVBQ3pDLFdBQVcsRUFDWCxDQUFDLEtBQVksRUFBQyxFQUFFO0lBQ1osTUFBTSxJQUFJLEdBQUUsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNCLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLENBQUE7QUFDdkMsQ0FBQyxDQUNKLENBQUEifQ==