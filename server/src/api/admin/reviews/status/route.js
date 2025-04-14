"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostAdminUpdateReviewsStatusSchema = void 0;
exports.POST = POST;
const update_review_1 = require("../../../../workflows/review/update-review");
const zod_1 = require("zod");
exports.PostAdminUpdateReviewsStatusSchema = zod_1.z.object({
    ids: zod_1.z.array(zod_1.z.string()),
    status: zod_1.z.enum(["pending", "approved", "rejected"]),
});
async function POST(req, res) {
    const { ids, status } = req.validatedBody;
    const { result } = await (0, update_review_1.updateReviewWorkflow)(req.scope).run({
        input: ids.map((id) => ({
            id,
            status,
        })),
    });
    res.json(result);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3Jldmlld3Mvc3RhdHVzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVlBLG9CQWNDO0FBdEJELDhFQUFpRjtBQUNqRiw2QkFBdUI7QUFFVixRQUFBLGtDQUFrQyxHQUFHLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDdkQsR0FBRyxFQUFFLE9BQUMsQ0FBQyxLQUFLLENBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3hCLE1BQU0sRUFBRSxPQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUN0RCxDQUFDLENBQUE7QUFFSyxLQUFLLFVBQVUsSUFBSSxDQUN0QixHQUFzRSxFQUN0RSxHQUFtQjtJQUVuQixNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUE7SUFFekMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBQSxvQ0FBb0IsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3pELEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BCLEVBQUU7WUFDRixNQUFNO1NBQ1QsQ0FBQyxDQUFDO0tBQ04sQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNwQixDQUFDIn0=