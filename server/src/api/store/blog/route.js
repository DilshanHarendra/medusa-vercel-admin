"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const get_blogs_1 = require("../../../workflows/blog/get-blogs");
const GET = async (req, res) => {
    const { result } = await (0, get_blogs_1.getBlogWorkflow)().run();
    res.json({ data: result.blogs || [] });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2Jsb2cvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsaUVBQWtFO0FBSTNELE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUNqRSxNQUFNLEVBQUMsTUFBTSxFQUFDLEdBQUcsTUFBTSxJQUFBLDJCQUFlLEdBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUM5QyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQTtBQUNyQyxDQUFDLENBQUE7QUFIWSxRQUFBLEdBQUcsT0FHZiJ9