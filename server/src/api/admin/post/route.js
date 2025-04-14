"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const get_blog_posts_1 = require("../../../workflows/blog/get-blog-posts");
const create_post_1 = require("../../../workflows/blog/create-post");
const GET = async (req, res) => {
    const { result } = await (0, get_blog_posts_1.getBlogPostsWorkflow)().run({
        input: { id: '', ...req.query }
    });
    res.json(result);
};
exports.GET = GET;
const POST = async (req, res) => {
    const { result } = await (0, create_post_1.createPostWorkflow)(req.scope).run({
        input: req.body,
    });
    res.json(result);
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3Bvc3Qvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsMkVBQTRFO0FBQzVFLHFFQUF1RTtBQUdoRSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDakUsTUFBTSxFQUFDLE1BQU0sRUFBQyxHQUFHLE1BQU0sSUFBQSxxQ0FBb0IsR0FBRSxDQUFDLEdBQUcsQ0FBQztRQUM5QyxLQUFLLEVBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBQztLQUM3QixDQUFDLENBQUE7SUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3BCLENBQUMsQ0FBQTtBQUxZLFFBQUEsR0FBRyxPQUtmO0FBS00sTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUFFLEdBQWlDLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ2pGLE1BQU0sRUFBQyxNQUFNLEVBQUMsR0FBRyxNQUFNLElBQUEsZ0NBQWtCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNyRCxLQUFLLEVBQUMsR0FBRyxDQUFDLElBQUk7S0FDakIsQ0FBQyxDQUFBO0lBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNwQixDQUFDLENBQUE7QUFMWSxRQUFBLElBQUksUUFLaEIifQ==