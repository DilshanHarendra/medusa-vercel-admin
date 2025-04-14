"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.PUT = exports.GET = void 0;
const menuResource_1 = require("../menuResource");
const get_menus_1 = require("../../../../workflows/menu/get-menus");
const update_menu_1 = require("../../../../workflows/menu/update-menu");
const delete_menus_1 = require("../../../../workflows/menu/delete-menus");
const GET = async (req, res) => {
    const { result } = await (0, get_menus_1.getMenuWorkflow)(req.scope).run({
        input: req.params.id
    });
    if (result.menu.length > 0) {
        res.json((0, menuResource_1.getMenuRetrieveResponse)(result.menu)[0]);
    }
    else {
        res.status(410).json({ message: "Menu not found" });
    }
};
exports.GET = GET;
const PUT = async (req, res) => {
    const payload = (0, menuResource_1.getMenuItems)(req.body);
    const { result } = await (0, update_menu_1.updateMenuWorkflow)(req.scope).run({
        input: {
            id: req.params.id,
            payload
        },
    });
    const output = {
        ...result.menu,
        children: [...result.createItems, ...result.updateItems]
    };
    // @ts-ignore
    res.json((0, menuResource_1.getMenuCreateResponse)(output));
};
exports.PUT = PUT;
const DELETE = async (req, res) => {
    const { result } = await (0, delete_menus_1.deleteMenuWorkflow)(req.scope).run({
        input: req.params.id,
    });
    res.json(result);
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL21lbnUvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxrREFBNkY7QUFDN0Ysb0VBQXFFO0FBRXJFLHdFQUEwRTtBQUMxRSwwRUFBMkU7QUFJcEUsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQWtCLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ2pFLE1BQU0sRUFBQyxNQUFNLEVBQUMsR0FBRyxNQUFNLElBQUEsMkJBQWUsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2xELEtBQUssRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7S0FDdEIsQ0FBQyxDQUFBO0lBRUYsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUMsQ0FBQztRQUN0QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUEsc0NBQXVCLEVBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDckQsQ0FBQztTQUFLLENBQUM7UUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLENBQUE7SUFDcEQsQ0FBQztBQUNMLENBQUMsQ0FBQTtBQVZZLFFBQUEsR0FBRyxPQVVmO0FBS00sTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQXlCLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ3hFLE1BQU0sT0FBTyxHQUFzQixJQUFBLDJCQUFZLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3pELE1BQU0sRUFBQyxNQUFNLEVBQUMsR0FBRyxNQUFNLElBQUEsZ0NBQWtCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNyRCxLQUFLLEVBQUM7WUFDRixFQUFFLEVBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hCLE9BQU87U0FDVjtLQUNKLENBQUMsQ0FBQTtJQUNGLE1BQU0sTUFBTSxHQUFFO1FBQ1YsR0FBRyxNQUFNLENBQUMsSUFBSTtRQUNkLFFBQVEsRUFBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7S0FDekQsQ0FBQTtJQUNELGFBQWE7SUFDYixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUEsb0NBQXFCLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtBQUMzQyxDQUFDLENBQUE7QUFkWSxRQUFBLEdBQUcsT0FjZjtBQUVNLE1BQU0sTUFBTSxHQUFHLEtBQUssRUFBRSxHQUF5QixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUMzRSxNQUFNLEVBQUMsTUFBTSxFQUFDLEdBQUcsTUFBTSxJQUFBLGlDQUFrQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDckQsS0FBSyxFQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtLQUN0QixDQUFDLENBQUE7SUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3BCLENBQUMsQ0FBQTtBQUxZLFFBQUEsTUFBTSxVQUtsQiJ9