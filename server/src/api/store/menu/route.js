"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const get_menus_1 = require("../../../workflows/menu/get-menus");
const menuResource_1 = require("../../admin/menu/menuResource");
const GET = async (req, res) => {
    const { result } = await (0, get_menus_1.getMenuWorkflow)(req.scope).run();
    res.json((0, menuResource_1.getMenuRetrieveResponse)(result.menu));
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL21lbnUvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsaUVBQWtFO0FBQ2xFLGdFQUFzRTtBQUkvRCxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDakUsTUFBTSxFQUFDLE1BQU0sRUFBQyxHQUFHLE1BQU0sSUFBQSwyQkFBZSxFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUN2RCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUEsc0NBQXVCLEVBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7QUFDbEQsQ0FBQyxDQUFBO0FBSFksUUFBQSxHQUFHLE9BR2YifQ==