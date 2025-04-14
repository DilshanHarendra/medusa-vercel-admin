"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.PUT = exports.GET = void 0;
const delete_page_1 = require("../../../../workflows/page/delete-page");
const update_page_1 = require("../../../../workflows/page/update-page");
const get_pages_1 = require("../../../../workflows/page/get-pages");
const GET = async (req, res) => {
    const { result } = await (0, get_pages_1.getPageWorkflow)().run({
        input: {
            id: req.params.id,
        },
    });
    if (result.pages.length > 0) {
        res.json(result.pages[0]);
    }
    else {
        res.status(410).json({ message: "Page not found" });
    }
};
exports.GET = GET;
const PUT = async (req, res) => {
    const { result } = await (0, update_page_1.updatePageWorkflow)(req.scope).run({
        input: {
            id: req.params.id,
            payload: req.body
        },
    });
    res.json(result);
};
exports.PUT = PUT;
const DELETE = async (req, res) => {
    const { result } = await (0, delete_page_1.deletePageWorkflow)(req.scope).run({
        input: req.params.id,
    });
    res.json(result);
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3BhZ2VzL1tpZF0vcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esd0VBQTBFO0FBQzFFLHdFQUEwRTtBQUUxRSxvRUFBcUU7QUFLOUQsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQWtCLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ2pFLE1BQU0sRUFBQyxNQUFNLEVBQUMsR0FBRyxNQUFNLElBQUEsMkJBQWUsR0FBRSxDQUFDLEdBQUcsQ0FBQztRQUN6QyxLQUFLLEVBQUM7WUFDRixFQUFFLEVBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ25CO0tBQ0osQ0FBQyxDQUFBO0lBQ0YsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUMsQ0FBQztRQUN2QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUM3QixDQUFDO1NBQUssQ0FBQztRQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLENBQUMsQ0FBQTtJQUNwRCxDQUFDO0FBRUwsQ0FBQyxDQUFBO0FBWlksUUFBQSxHQUFHLE9BWWY7QUFLTSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBeUIsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDeEUsTUFBTSxFQUFDLE1BQU0sRUFBQyxHQUFHLE1BQU0sSUFBQSxnQ0FBa0IsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3JELEtBQUssRUFBQztZQUNGLEVBQUUsRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEIsT0FBTyxFQUFDLEdBQUcsQ0FBQyxJQUFJO1NBQ25CO0tBQ0osQ0FBQyxDQUFBO0lBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNwQixDQUFDLENBQUE7QUFSWSxRQUFBLEdBQUcsT0FRZjtBQUVNLE1BQU0sTUFBTSxHQUFHLEtBQUssRUFBRSxHQUEwQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUM1RSxNQUFNLEVBQUMsTUFBTSxFQUFDLEdBQUcsTUFBTSxJQUFBLGdDQUFrQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDckQsS0FBSyxFQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtLQUN0QixDQUFDLENBQUE7SUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3BCLENBQUMsQ0FBQTtBQUxZLFFBQUEsTUFBTSxVQUtsQiJ9