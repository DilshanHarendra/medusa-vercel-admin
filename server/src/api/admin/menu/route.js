"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const menuResource_1 = require("./menuResource");
const create_menu_1 = require("../../../workflows/menu/create-menu");
const get_menus_1 = require("../../../workflows/menu/get-menus");
const GET = async (req, res) => {
    const { result } = await (0, get_menus_1.getMenuWorkflow)(req.scope).run();
    res.json((0, menuResource_1.getMenuRetrieveResponse)(result.menu));
};
exports.GET = GET;
const POST = async (req, res) => {
    const payload = (0, menuResource_1.getMenuItems)(req.body);
    const { result } = await (0, create_menu_1.createMenuWorkflow)(req.scope).run({
        input: payload,
    });
    result.menu.children = [...result.createItems];
    res.json((0, menuResource_1.getMenuCreateResponse)(result.menu));
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL21lbnUvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsaURBQTRGO0FBQzVGLHFFQUF1RTtBQUN2RSxpRUFBa0U7QUFJM0QsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQWtCLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ2pFLE1BQU0sRUFBQyxNQUFNLEVBQUMsR0FBRyxNQUFNLElBQUEsMkJBQWUsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDdkQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFBLHNDQUF1QixFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBQ2xELENBQUMsQ0FBQTtBQUhZLFFBQUEsR0FBRyxPQUdmO0FBS00sTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUFFLEdBQXlCLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ3pFLE1BQU0sT0FBTyxHQUFzQixJQUFBLDJCQUFZLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3pELE1BQU0sRUFBQyxNQUFNLEVBQUMsR0FBRyxNQUFNLElBQUEsZ0NBQWtCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNyRCxLQUFLLEVBQUMsT0FBTztLQUNoQixDQUFDLENBQUE7SUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQzVDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBQSxvQ0FBcUIsRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUNoRCxDQUFDLENBQUE7QUFQWSxRQUFBLElBQUksUUFPaEIifQ==