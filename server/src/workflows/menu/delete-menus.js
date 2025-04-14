"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenuWorkflow = exports.deleteMenuItems = exports.deleteMenus = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const menu_1 = require("../../modules/menu");
exports.deleteMenus = (0, workflows_sdk_1.createStep)('delete-menus-step', async (input, { container }) => {
    const menuModuleService = container.resolve(menu_1.MENU_MODULE);
    const menu = await menuModuleService.deleteMenus(input);
    return new workflows_sdk_1.StepResponse(menu);
});
exports.deleteMenuItems = (0, workflows_sdk_1.createStep)('delete-menu-items-step', async (input, { container }) => {
    const menuModuleService = container.resolve(menu_1.MENU_MODULE);
    const menuItems = await menuModuleService.deleteMenuItems({ menu_id: input });
    return new workflows_sdk_1.StepResponse(menuItems);
});
exports.deleteMenuWorkflow = (0, workflows_sdk_1.createWorkflow)('delete-menus', (input) => {
    (0, exports.deleteMenuItems)(input);
    (0, exports.deleteMenus)(input);
    return new workflows_sdk_1.WorkflowResponse({ message: "ok" });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLW1lbnVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9tZW51L2RlbGV0ZS1tZW51cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBNEc7QUFDNUcsNkNBQThDO0FBS2pDLFFBQUEsV0FBVyxHQUFHLElBQUEsMEJBQVUsRUFDakMsbUJBQW1CLEVBQ25CLEtBQUssRUFBRSxLQUFZLEVBQUMsRUFBQyxTQUFTLEVBQUMsRUFBQyxFQUFFO0lBQzlCLE1BQU0saUJBQWlCLEdBQXNCLFNBQVMsQ0FBQyxPQUFPLENBQzFELGtCQUFXLENBQ2QsQ0FBQTtJQUNELE1BQU0sSUFBSSxHQUFHLE1BQU0saUJBQWlCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3ZELE9BQU8sSUFBSSw0QkFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FDSixDQUFBO0FBQ1ksUUFBQSxlQUFlLEdBQUcsSUFBQSwwQkFBVSxFQUNyQyx3QkFBd0IsRUFDeEIsS0FBSyxFQUFFLEtBQVksRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLEVBQUU7SUFDOUIsTUFBTSxpQkFBaUIsR0FBc0IsU0FBUyxDQUFDLE9BQU8sQ0FDMUQsa0JBQVcsQ0FDZCxDQUFBO0lBQ0QsTUFBTSxTQUFTLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtJQUMxRSxPQUFPLElBQUksNEJBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUN0QyxDQUFDLENBQ0osQ0FBQTtBQUdZLFFBQUEsa0JBQWtCLEdBQUcsSUFBQSw4QkFBYyxFQUM1QyxjQUFjLEVBQ2QsQ0FBQyxLQUFZLEVBQUMsRUFBRTtJQUNYLElBQUEsdUJBQWUsRUFBQyxLQUFLLENBQUMsQ0FBQTtJQUNuQixJQUFBLG1CQUFXLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFDdEIsT0FBTyxJQUFJLGdDQUFnQixDQUFDLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxDQUFDLENBQUE7QUFDL0MsQ0FBQyxDQUNKLENBQUEifQ==