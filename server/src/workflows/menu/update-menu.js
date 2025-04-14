"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMenuWorkflow = exports.updateMenu = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const menu_1 = require("../../modules/menu");
exports.updateMenu = (0, workflows_sdk_1.createStep)('update-menu-step', async (input, { container }) => {
    const menuModuleService = container.resolve(menu_1.MENU_MODULE);
    const menu = await menuModuleService.updateMenus({
        selector: {
            id: input.id,
        },
        data: {
            name: input.payload.menu.name,
        }
    });
    const currentMenuItems = await menuModuleService.listMenuItems({
        menu: input.id,
    }, {
        select: ["id"]
    });
    const updateIds = input.payload.update.map(item => item.id);
    const deleteIds = currentMenuItems
        .filter(item => !updateIds.includes(item.id))
        .map(item => item.id);
    if (deleteIds.length > 0) {
        await menuModuleService.deleteMenuItems(deleteIds);
    }
    const createItems = await menuModuleService.createMenuItems(input.payload.create);
    const updateItems = await menuModuleService.updateMenuItems(input.payload.update);
    return new workflows_sdk_1.StepResponse({ menu, createItems, updateItems });
});
exports.updateMenuWorkflow = (0, workflows_sdk_1.createWorkflow)('update-menu', (input) => {
    const menu = (0, exports.updateMenu)(input);
    return new workflows_sdk_1.WorkflowResponse(menu);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLW1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL21lbnUvdXBkYXRlLW1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTRHO0FBQzVHLDZDQUE4QztBQUtqQyxRQUFBLFVBQVUsR0FBRyxJQUFBLDBCQUFVLEVBQ2hDLGtCQUFrQixFQUNsQixLQUFLLEVBQUUsS0FBNkMsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLEVBQUU7SUFDL0QsTUFBTSxpQkFBaUIsR0FBc0IsU0FBUyxDQUFDLE9BQU8sQ0FDMUQsa0JBQVcsQ0FDZCxDQUFBO0lBQ0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7UUFDN0MsUUFBUSxFQUFDO1lBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO1NBQ2Y7UUFDRCxJQUFJLEVBQUM7WUFDRCxJQUFJLEVBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSTtTQUMvQjtLQUNKLENBQUMsQ0FBQTtJQUdGLE1BQU0sZ0JBQWdCLEdBQUUsTUFBTSxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7UUFDM0QsSUFBSSxFQUFDLEtBQUssQ0FBQyxFQUFFO0tBQ2YsRUFBQztRQUNFLE1BQU0sRUFBQyxDQUFDLElBQUksQ0FBQztLQUNoQixDQUFDLENBQUE7SUFDRixNQUFNLFNBQVMsR0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFBLEVBQUUsQ0FBQSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDdkQsTUFBTSxTQUFTLEdBQUUsZ0JBQWdCO1NBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUEsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDMUMsR0FBRyxDQUFDLElBQUksQ0FBQSxFQUFFLENBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZCLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUMsQ0FBQztRQUN0QixNQUFNLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN0RCxDQUFDO0lBQ0QsTUFBTSxXQUFXLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNqRixNQUFNLFdBQVcsR0FBRyxNQUFNLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2pGLE9BQU8sSUFBSSw0QkFBWSxDQUFDLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsQ0FBQyxDQUFBO0FBQzNELENBQUMsQ0FDSixDQUFBO0FBSVksUUFBQSxrQkFBa0IsR0FBRyxJQUFBLDhCQUFjLEVBQzVDLGFBQWEsRUFDYixDQUFDLEtBQTRDLEVBQUMsRUFBRTtJQUM1QyxNQUFNLElBQUksR0FBRSxJQUFBLGtCQUFVLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0IsT0FBTyxJQUFJLGdDQUFnQixDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3JDLENBQUMsQ0FDSixDQUFBIn0=