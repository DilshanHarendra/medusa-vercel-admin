"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostWorkflow = exports.createPost = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const blog_1 = require("../../modules/blog");
const Const_1 = require("../../admin/helper/Const");
exports.createPost = (0, workflows_sdk_1.createStep)('create-post-step', async (input, { container }) => {
    const blogModuleService = container.resolve(blog_1.BLOG_MODULE);
    let blog = input.blog;
    if (!blog.id) {
        blog = await blogModuleService.createBlogs({
            name: input.blog.name,
            slug: `${input.blog.name}`.replace(" ", "-").toLowerCase(),
        });
    }
    delete input.blog;
    const post = await blogModuleService.createBlogPosts({
        ...input,
        blog_id: blog.id,
        page_title: input.pageTitle,
        meta_description: input.metaDescription,
        url_handle: input.urlHandle
    });
    if (post.url_handle.includes(Const_1.REPLACE_ID)) {
        const url_handle = post.url_handle.replace(Const_1.REPLACE_ID, post.id);
        blogModuleService.updateBlogPosts({
            selector: {
                id: post.id
            },
            data: {
                url_handle
            }
        });
        post.url_handle = url_handle;
    }
    post.blog = blog;
    // @ts-ignore
    post.pageTitle = post.page_title;
    // @ts-ignore
    post.metaDescription = post.meta_description;
    // @ts-ignore
    post.urlHandle = post.url_handle;
    // @ts-ignore
    delete post.page_title;
    // @ts-ignore
    delete post.meta_description;
    // @ts-ignore
    delete post.url_handle;
    return new workflows_sdk_1.StepResponse(post, post.id);
});
exports.createPostWorkflow = (0, workflows_sdk_1.createWorkflow)('create-post', (input) => {
    const post = (0, exports.createPost)(input);
    return new workflows_sdk_1.WorkflowResponse(post);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXBvc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2Jsb2cvY3JlYXRlLXBvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBSzBDO0FBQzFDLDZDQUErQztBQUcvQyxvREFBb0Q7QUFLdkMsUUFBQSxVQUFVLEdBQUcsSUFBQSwwQkFBVSxFQUNoQyxrQkFBa0IsRUFDbEIsS0FBSyxFQUFFLEtBQW9CLEVBQUMsRUFBQyxTQUFTLEVBQUMsRUFBQyxFQUFFO0lBQ3RDLE1BQU0saUJBQWlCLEdBQXNCLFNBQVMsQ0FBQyxPQUFPLENBQzFELGtCQUFXLENBQ2QsQ0FBQTtJQUNELElBQUksSUFBSSxHQUFDLEtBQUssQ0FBQyxJQUFJLENBQUE7SUFDbkIsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsQ0FBQztRQUNULElBQUksR0FBRyxNQUFNLGlCQUFpQixDQUFDLFdBQVcsQ0FBQztZQUN2QyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3JCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUU7U0FDNUQsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQTtJQUNqQixNQUFNLElBQUksR0FBRyxNQUFNLGlCQUFpQixDQUFDLGVBQWUsQ0FBQztRQUNqRCxHQUFHLEtBQUs7UUFDUixPQUFPLEVBQUMsSUFBSSxDQUFDLEVBQUU7UUFDZixVQUFVLEVBQUMsS0FBSyxDQUFDLFNBQVM7UUFDMUIsZ0JBQWdCLEVBQUMsS0FBSyxDQUFDLGVBQWU7UUFDdEMsVUFBVSxFQUFDLEtBQUssQ0FBQyxTQUFTO0tBQzdCLENBQUMsQ0FBQTtJQUNGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsa0JBQVUsQ0FBQyxFQUFDLENBQUM7UUFDdEMsTUFBTSxVQUFVLEdBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsa0JBQVUsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDN0QsaUJBQWlCLENBQUMsZUFBZSxDQUFDO1lBQzlCLFFBQVEsRUFBQztnQkFDTCxFQUFFLEVBQUMsSUFBSSxDQUFDLEVBQUU7YUFDYjtZQUNELElBQUksRUFBQztnQkFDRCxVQUFVO2FBQ2I7U0FDSixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsVUFBVSxHQUFDLFVBQVUsQ0FBQTtJQUM5QixDQUFDO0lBRUQsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUE7SUFHZCxhQUFhO0lBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQ2hDLGFBQWE7SUFDYixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQTtJQUM1QyxhQUFhO0lBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBRTlCLGFBQWE7SUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDdEIsYUFBYTtJQUNiLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFBO0lBQzVCLGFBQWE7SUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7SUFHdEIsT0FBTyxJQUFJLDRCQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUMxQyxDQUFDLENBQ0osQ0FBQTtBQUlZLFFBQUEsa0JBQWtCLEdBQUcsSUFBQSw4QkFBYyxFQUM1QyxhQUFhLEVBQ2IsQ0FBQyxLQUFtQixFQUFDLEVBQUU7SUFDbkIsTUFBTSxJQUFJLEdBQUUsSUFBQSxrQkFBVSxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNyQyxDQUFDLENBQ0osQ0FBQSJ9