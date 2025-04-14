"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const get_blogs_1 = require("../../../../workflows/blog/get-blogs");
const GET = async (req, res) => {
    const { result } = await (0, get_blogs_1.getBlogWorkflow)().run({
        input: req.params.id,
    });
    if (result.blogs.length > 0) {
        res.json(result.blogs);
    }
    else {
        res.status(410).json({ message: "Blog not found" });
    }
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2Jsb2dzL1tpZF0vcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esb0VBQXFFO0FBSTlELE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUNqRSxNQUFNLEVBQUMsTUFBTSxFQUFDLEdBQUcsTUFBTSxJQUFBLDJCQUFlLEdBQUUsQ0FBQyxHQUFHLENBQUM7UUFDekMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtLQUN0QixDQUFDLENBQUE7SUFDRixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzFCLENBQUM7U0FBSyxDQUFDO1FBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFBO0lBQ3BELENBQUM7QUFDTCxDQUFDLENBQUE7QUFUWSxRQUFBLEdBQUcsT0FTZiJ9