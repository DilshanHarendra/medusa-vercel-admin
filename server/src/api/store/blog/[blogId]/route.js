"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const get_blogs_1 = require("../../../../workflows/blog/get-blogs");
const get_blog_posts_1 = require("../../../../workflows/blog/get-blog-posts");
const GET = async (req, res) => {
    const { result } = await (0, get_blogs_1.getBlogWorkflow)().run({
        input: req.params.blogId,
    });
    if (result.blogs.length > 0) {
        let filter = {};
        if (req.query?.filter) {
            // @ts-ignore
            filter = JSON.parse(req.query.filter);
        }
        const { result: postResults } = await (0, get_blog_posts_1.getBlogPostsWorkflow)().run({
            input: { id: '',
                ...req.query,
                filter: JSON.stringify({
                    ...filter,
                    blog: {
                        id: req.params.blogId,
                    },
                    visibility: true,
                }),
            }
        });
        res.json(postResults);
    }
    else {
        res.status(410).json({ message: "Blog not found" });
    }
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2Jsb2cvW2Jsb2dJZF0vcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esb0VBQXFFO0FBQ3JFLDhFQUErRTtBQUd4RSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDakUsTUFBTSxFQUFDLE1BQU0sRUFBQyxHQUFHLE1BQU0sSUFBQSwyQkFBZSxHQUFFLENBQUMsR0FBRyxDQUFDO1FBQ3pDLEtBQUssRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU07S0FDMUIsQ0FBQyxDQUFBO0lBQ0YsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUMsQ0FBQztRQUN2QixJQUFLLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDaEIsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDO1lBQ25CLGFBQWE7WUFDYixNQUFNLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7UUFFRCxNQUFNLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxHQUFHLE1BQU0sSUFBQSxxQ0FBb0IsR0FBRSxDQUFDLEdBQUcsQ0FBQztZQUMxRCxLQUFLLEVBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRTtnQkFDUixHQUFHLEdBQUcsQ0FBQyxLQUFLO2dCQUNaLE1BQU0sRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNsQixHQUFHLE1BQU07b0JBQ1QsSUFBSSxFQUFDO3dCQUNELEVBQUUsRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU07cUJBQ3ZCO29CQUNELFVBQVUsRUFBQyxJQUFJO2lCQUNsQixDQUFDO2FBQ0w7U0FDSixDQUFDLENBQUE7UUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7U0FBSyxDQUFDO1FBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFBO0lBQ3BELENBQUM7QUFDTCxDQUFDLENBQUE7QUEzQlksUUFBQSxHQUFHLE9BMkJmIn0=