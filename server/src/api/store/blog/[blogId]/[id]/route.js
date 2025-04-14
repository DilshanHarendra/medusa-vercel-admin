"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const get_blog_posts_1 = require("../../../../../workflows/blog/get-blog-posts");
const GET = async (req, res) => {
    const { result } = await (0, get_blog_posts_1.getBlogPostsWorkflow)().run({
        input: {
            filter: JSON.stringify({
                id: req.params.id,
                visibility: true,
                blog: {
                    id: req.params.blogId,
                }
            })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2Jsb2cvW2Jsb2dJZF0vW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxpRkFBa0Y7QUFJM0UsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQWtCLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ2pFLE1BQU0sRUFBQyxNQUFNLEVBQUMsR0FBRyxNQUFNLElBQUEscUNBQW9CLEdBQUUsQ0FBQyxHQUFHLENBQUM7UUFDOUMsS0FBSyxFQUFDO1lBQ0YsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ25CLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2pCLFVBQVUsRUFBQyxJQUFJO2dCQUNmLElBQUksRUFBQztvQkFDRixFQUFFLEVBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNO2lCQUN0QjthQUNKLENBQUM7U0FDTDtLQUNKLENBQUMsQ0FBQTtJQUNGLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDLENBQUM7UUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDNUIsQ0FBQztTQUFLLENBQUM7UUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLENBQUE7SUFDcEQsQ0FBQztBQUVMLENBQUMsQ0FBQTtBQWxCWSxRQUFBLEdBQUcsT0FrQmYifQ==