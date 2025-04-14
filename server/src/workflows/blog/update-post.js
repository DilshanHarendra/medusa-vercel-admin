"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostWorkflow = exports.updatePost = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const blog_1 = require("../../modules/blog");
exports.updatePost = (0, workflows_sdk_1.createStep)('update-post-step', async (input, { container }) => {
    const blogModuleService = container.resolve(blog_1.BLOG_MODULE);
    let blog = input.payload.blog;
    if (!blog.id) {
        blog = await blogModuleService.createBlogs({
            name: blog.name,
        });
    }
    delete input.payload.blog;
    // @ts-ignore
    const post = await blogModuleService.updateBlogPosts({
        selector: { id: input.id },
        data: {
            ...input.payload,
            blog_id: blog.id,
        }
    });
    post.blog = blog;
    const formattedPost = {
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
    return new workflows_sdk_1.StepResponse(formattedPost, post.id);
});
exports.updatePostWorkflow = (0, workflows_sdk_1.createWorkflow)('update-post', (input) => {
    const post = (0, exports.updatePost)(input);
    return new workflows_sdk_1.WorkflowResponse(post);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBvc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2Jsb2cvdXBkYXRlLXBvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBSzBDO0FBQzFDLDZDQUErQztBQU1sQyxRQUFBLFVBQVUsR0FBRyxJQUFBLDBCQUFVLEVBQ2hDLGtCQUFrQixFQUNsQixLQUFLLEVBQUUsS0FBd0MsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLEVBQUU7SUFDMUQsTUFBTSxpQkFBaUIsR0FBc0IsU0FBUyxDQUFDLE9BQU8sQ0FDMUQsa0JBQVcsQ0FDZCxDQUFBO0lBQ0QsSUFBSSxJQUFJLEdBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7SUFDM0IsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsQ0FBQztRQUNULElBQUksR0FBRyxNQUFNLGlCQUFpQixDQUFDLFdBQVcsQ0FBQztZQUN2QyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDbEIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7SUFDekIsYUFBYTtJQUNiLE1BQU0sSUFBSSxHQUFpQixNQUFNLGlCQUFpQixDQUFDLGVBQWUsQ0FBQztRQUMvRCxRQUFRLEVBQUMsRUFBQyxFQUFFLEVBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQztRQUN0QixJQUFJLEVBQUM7WUFDRCxHQUFHLEtBQUssQ0FBQyxPQUFPO1lBQ2hCLE9BQU8sRUFBQyxJQUFJLENBQUMsRUFBRTtTQUNsQjtLQUNKLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFBO0lBRWQsTUFBTSxhQUFhLEdBQUk7UUFDbkIsRUFBRSxFQUFDLElBQUksQ0FBQyxFQUFFO1FBQ1YsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJO1FBQ2QsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLO1FBQ2hCLE9BQU8sRUFBQyxJQUFJLENBQUMsT0FBTztRQUNwQixPQUFPLEVBQUMsSUFBSSxDQUFDLE9BQU87UUFDcEIsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNO1FBQ2xCLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSTtRQUNkLFVBQVUsRUFBQyxJQUFJLENBQUMsVUFBVTtRQUMxQixNQUFNLEVBQUMsSUFBSSxDQUFDLE1BQU07UUFDbEIsU0FBUyxFQUFDLElBQUksQ0FBQyxVQUFVO1FBQ3pCLGVBQWUsRUFBQyxJQUFJLENBQUMsZ0JBQWdCO1FBQ3JDLFNBQVMsRUFBQyxJQUFJLENBQUMsVUFBVTtLQUM1QixDQUFBO0lBQ0QsT0FBTyxJQUFJLDRCQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUNuRCxDQUFDLENBQ0osQ0FBQTtBQUlZLFFBQUEsa0JBQWtCLEdBQUcsSUFBQSw4QkFBYyxFQUM1QyxhQUFhLEVBQ2IsQ0FBQyxLQUF1QyxFQUFDLEVBQUU7SUFDdkMsTUFBTSxJQUFJLEdBQUUsSUFBQSxrQkFBVSxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNyQyxDQUFDLENBQ0osQ0FBQSJ9