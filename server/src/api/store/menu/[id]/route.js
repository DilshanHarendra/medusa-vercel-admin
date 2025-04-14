"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const get_menus_1 = require("../../../../workflows/menu/get-menus");
const menuResource_1 = require("../../../admin/menu/menuResource");
const GET = async (req, res) => {
    const { result } = await (0, get_menus_1.getMenuWorkflow)(req.scope).run({
        input: req.params.id
    });
    if (result.menu.length > 0) {
        res.json((0, menuResource_1.getMenuRetrieveResponse)(result.menu)[0]);
    }
    else {
        res.json([]);
    }
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL21lbnUvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxvRUFBcUU7QUFDckUsbUVBQXlFO0FBSWxFLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUNqRSxNQUFNLEVBQUMsTUFBTSxFQUFDLEdBQUcsTUFBTSxJQUFBLDJCQUFlLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNsRCxLQUFLLEVBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0tBQ3RCLENBQUMsQ0FBQTtJQUVGLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDLENBQUM7UUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFBLHNDQUF1QixFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JELENBQUM7U0FBSyxDQUFDO1FBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNoQixDQUFDO0FBQ0wsQ0FBQyxDQUFBO0FBVlksUUFBQSxHQUFHLE9BVWYifQ==