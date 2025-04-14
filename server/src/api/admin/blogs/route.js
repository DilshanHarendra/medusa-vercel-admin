"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const get_blogs_1 = require("../../../workflows/blog/get-blogs");
const GET = async (req, res) => {
    const { result } = await (0, get_blogs_1.getBlogWorkflow)().run({
        input: req.params.id,
    });
    res.json({ data: result.blogs || [] });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2Jsb2dzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlFQUFrRTtBQUkzRCxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDakUsTUFBTSxFQUFDLE1BQU0sRUFBQyxHQUFHLE1BQU0sSUFBQSwyQkFBZSxHQUFFLENBQUMsR0FBRyxDQUFDO1FBQ3pDLEtBQUssRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7S0FDdEIsQ0FBQyxDQUFBO0lBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBQyxNQUFNLENBQUMsS0FBSyxJQUFFLEVBQUUsRUFBQyxDQUFDLENBQUE7QUFDckMsQ0FBQyxDQUFBO0FBTFksUUFBQSxHQUFHLE9BS2YifQ==