"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuWorkflow = exports.createMenu = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const menu_1 = require("../../modules/menu");
exports.createMenu = (0, workflows_sdk_1.createStep)('create-menu-step', async (input, { container }) => {
    const menuModuleService = container.resolve(menu_1.MENU_MODULE);
    const menu = await menuModuleService.createMenus({
        id: input.menu.id,
        name: input.menu.name,
    });
    const createItems = await menuModuleService.createMenuItems(input.create);
    return new workflows_sdk_1.StepResponse({ menu, createItems });
});
exports.createMenuWorkflow = (0, workflows_sdk_1.createWorkflow)('create-menu', (input) => {
    const response = (0, exports.createMenu)(input);
    return new workflows_sdk_1.WorkflowResponse(response);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLW1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL21lbnUvY3JlYXRlLW1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTRHO0FBQzVHLDZDQUE4QztBQUtqQyxRQUFBLFVBQVUsR0FBRyxJQUFBLDBCQUFVLEVBQ2hDLGtCQUFrQixFQUNsQixLQUFLLEVBQUUsS0FBeUIsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLEVBQUU7SUFDM0MsTUFBTSxpQkFBaUIsR0FBc0IsU0FBUyxDQUFDLE9BQU8sQ0FDMUQsa0JBQVcsQ0FDZCxDQUFBO0lBQ0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7UUFDN0MsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNqQixJQUFJLEVBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJO0tBQ3ZCLENBQUMsQ0FBQTtJQUVGLE1BQU0sV0FBVyxHQUFHLE1BQU0saUJBQWlCLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN6RSxPQUFPLElBQUksNEJBQVksQ0FBQyxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsQ0FBQyxDQUFBO0FBQy9DLENBQUMsQ0FDSixDQUFBO0FBSVksUUFBQSxrQkFBa0IsR0FBRyxJQUFBLDhCQUFjLEVBQzVDLGFBQWEsRUFDYixDQUFDLEtBQXdCLEVBQUMsRUFBRTtJQUN4QixNQUFNLFFBQVEsR0FBRSxJQUFBLGtCQUFVLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFDakMsT0FBTyxJQUFJLGdDQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3pDLENBQUMsQ0FDSixDQUFBIn0=