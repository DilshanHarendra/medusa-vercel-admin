"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.PUT = exports.GET = void 0;
const update_post_1 = require("../../../../workflows/blog/update-post");
const get_blog_posts_1 = require("../../../../workflows/blog/get-blog-posts");
const delete_post_1 = require("../../../../workflows/blog/delete-post");
const GET = async (req, res) => {
    const { result } = await (0, get_blog_posts_1.getBlogPostsWorkflow)().run({
        input: {
            id: req.params.id
        },
    });
    if (result.data.length > 0) {
        res.json(result.data[0]);
    }
    else {
        res.status(410).json({ message: "Post not found" });
    }
};
exports.GET = GET;
const PUT = async (req, res) => {
    const { result } = await (0, update_post_1.updatePostWorkflow)(req.scope).run({
        input: {
            id: req.params.id,
            payload: req.body
        },
    });
    res.json(result);
};
exports.PUT = PUT;
const DELETE = async (req, res) => {
    const { result } = await (0, delete_post_1.deletePostWorkflow)(req.scope).run({
        input: req.params.id,
    });
    res.json(result);
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3Bvc3QvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSx3RUFBMEU7QUFDMUUsOEVBQStFO0FBQy9FLHdFQUEwRTtBQUtuRSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDakUsTUFBTSxFQUFDLE1BQU0sRUFBQyxHQUFHLE1BQU0sSUFBQSxxQ0FBb0IsR0FBRSxDQUFDLEdBQUcsQ0FBQztRQUM5QyxLQUFLLEVBQUM7WUFDRixFQUFFLEVBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ25CO0tBQ0osQ0FBQyxDQUFBO0lBQ0YsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUMsQ0FBQztRQUN0QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUM1QixDQUFDO1NBQUssQ0FBQztRQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLENBQUMsQ0FBQTtJQUNwRCxDQUFDO0FBRUwsQ0FBQyxDQUFBO0FBWlksUUFBQSxHQUFHLE9BWWY7QUFLTSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBaUMsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDaEYsTUFBTSxFQUFDLE1BQU0sRUFBQyxHQUFHLE1BQU0sSUFBQSxnQ0FBa0IsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3JELEtBQUssRUFBQztZQUNGLEVBQUUsRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEIsT0FBTyxFQUFDLEdBQUcsQ0FBQyxJQUFJO1NBQ25CO0tBQ0osQ0FBQyxDQUFBO0lBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNwQixDQUFDLENBQUE7QUFSWSxRQUFBLEdBQUcsT0FRZjtBQUVNLE1BQU0sTUFBTSxHQUFHLEtBQUssRUFBRSxHQUFpQyxFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUNuRixNQUFNLEVBQUMsTUFBTSxFQUFDLEdBQUcsTUFBTSxJQUFBLGdDQUFrQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDckQsS0FBSyxFQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtLQUN0QixDQUFDLENBQUE7SUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3BCLENBQUMsQ0FBQTtBQUxZLFFBQUEsTUFBTSxVQUtsQiJ9