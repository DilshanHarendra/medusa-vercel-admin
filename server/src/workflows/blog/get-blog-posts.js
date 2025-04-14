"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogPostsWorkflow = exports.getPosts = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const blog_1 = require("../../modules/blog");
exports.getPosts = (0, workflows_sdk_1.createStep)('get-posts-step', async (input, { container }) => {
    const blogModuleService = container.resolve(blog_1.BLOG_MODULE);
    let filter = {};
    let sort = {};
    if (input.id) {
        filter = { id: input.id };
    }
    else {
        if (input.sort) {
            sort = JSON.parse(input.sort);
        }
        else {
            sort = {
                updated_at: 'DESC'
            };
        }
        if (input.s) {
            filter = {
                $or: [
                    {
                        title: {
                            $like: `%${input.s}%`,
                        }
                    },
                    {
                        content: {
                            $like: `%${input.s}%`,
                        }
                    }
                ]
            };
        }
        if (input.filter) {
            if (input.s) {
                filter = {
                    $and: [
                        JSON.parse(input.filter),
                        {
                            $or: filter["$or"]
                        }
                    ]
                };
            }
            else {
                filter = JSON.parse(input.filter);
            }
        }
    }
    const page = parseInt(`${input.page}`) || 0;
    const limit = parseInt(`${input.limit}`) || 10;
    const [posts, count] = await blogModuleService.listAndCountBlogPosts(filter, {
        relations: ['blog'],
        order: sort,
        take: limit,
        skip: page * limit
    });
    const pagination = {
        pages: Math.ceil(count / (limit)),
        limit,
        total: count,
        page
    };
    const formattedPosts = posts.map(post => {
        return {
            id: post.id,
            blog: post.blog,
            title: post.title,
            content: post.content,
            excerpt: post.excerpt,
            author: post.author,
            tags: post.tags,
            visibility: post.visibility,
            images: post.images,
            pageTitle: post.page_title,
            metaDescription: post.meta_description,
            urlHandle: post.url_handle
        };
    });
    return new workflows_sdk_1.StepResponse({ posts: formattedPosts, pagination });
});
exports.getBlogPostsWorkflow = (0, workflows_sdk_1.createWorkflow)('get-blog-posts', (input) => {
    const data = (0, exports.getPosts)(input);
    const payload = (0, workflows_sdk_1.transform)({ ...data }, (data) => ({
        data: data.posts,
        pagination: data.pagination
    }));
    return new workflows_sdk_1.WorkflowResponse(payload);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWJsb2ctcG9zdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2Jsb2cvZ2V0LWJsb2ctcG9zdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQXNIO0FBQ3RILDZDQUE4QztBQUtqQyxRQUFBLFFBQVEsR0FBRyxJQUFBLDBCQUFVLEVBQzlCLGdCQUFnQixFQUNoQixLQUFLLEVBQUUsS0FBeUIsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLEVBQUU7SUFDM0MsTUFBTSxpQkFBaUIsR0FBc0IsU0FBUyxDQUFDLE9BQU8sQ0FDMUQsa0JBQVcsQ0FDZCxDQUFBO0lBQ0QsSUFBSSxNQUFNLEdBQUMsRUFBRSxDQUFBO0lBQ2IsSUFBSSxJQUFJLEdBQUMsRUFBRSxDQUFBO0lBQ1gsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFDLENBQUM7UUFDVixNQUFNLEdBQUUsRUFBQyxFQUFFLEVBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxDQUFBO0lBQ3pCLENBQUM7U0FBSSxDQUFDO1FBQ0YsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFDLENBQUM7WUFDWixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakMsQ0FBQzthQUFLLENBQUM7WUFDSCxJQUFJLEdBQUc7Z0JBQ0gsVUFBVSxFQUFDLE1BQU07YUFDcEIsQ0FBQTtRQUNMLENBQUM7UUFFRCxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUNULE1BQU0sR0FBQztnQkFDSCxHQUFHLEVBQUU7b0JBQ0Q7d0JBQ0ksS0FBSyxFQUFFOzRCQUNILEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUc7eUJBQ3hCO3FCQUNKO29CQUNEO3dCQUNJLE9BQU8sRUFBRTs0QkFDTCxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHO3lCQUN4QjtxQkFDSjtpQkFDSjth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