"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const get_pages_1 = require("../../../../workflows/page/get-pages");
const GET = async (req, res) => {
    const { result } = await (0, get_pages_1.getPageWorkflow)().run({
        input: {
            slug: req.params.id,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3BhZ2VzL1tpZF0vcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esb0VBQXFFO0FBSzlELE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUNqRSxNQUFNLEVBQUMsTUFBTSxFQUFDLEdBQUcsTUFBTSxJQUFBLDJCQUFlLEdBQUUsQ0FBQyxHQUFHLENBQUM7UUFDekMsS0FBSyxFQUFDO1lBQ0YsSUFBSSxFQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtTQUNyQjtLQUNKLENBQUMsQ0FBQTtJQUNGLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDLENBQUM7UUFDdkIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDN0IsQ0FBQztTQUFLLENBQUM7UUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLENBQUE7SUFDcEQsQ0FBQztBQUVMLENBQUMsQ0FBQTtBQVpZLFFBQUEsR0FBRyxPQVlmIn0=