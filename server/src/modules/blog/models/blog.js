"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPost = exports.Blog = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.Blog = utils_1.model.define('blog', {
    id: utils_1.model.id().primaryKey(),
    name: utils_1.model.text().unique(),
    slug: utils_1.model.text().unique(),
    posts: utils_1.model.hasMany(() => exports.BlogPost)
})
    .cascades({
    delete: ["posts"]
});
exports.BlogPost = utils_1.model.define('blog_post', {
    id: utils_1.model.id().primaryKey(),
    blog: utils_1.model.belongsTo(() => exports.Blog, { mappedBy: 'posts' }),
    title: utils_1.model.text(),
    content: utils_1.model.text().nullable(),
    excerpt: utils_1.model.text().nullable(),
    page_title: utils_1.model.text().nullable(),
    meta_description: utils_1.model.text().nullable(),
    url_handle: utils_1.model.text().unique(),
    author: utils_1.model.text(),
    tags: utils_1.model.array().default([]),
    visibility: utils_1.model.boolean().default(false),
    images: utils_1.model.array().default([])
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Jsb2cvbW9kZWxzL2Jsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQStDO0FBRWxDLFFBQUEsSUFBSSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQ3JDLEVBQUUsRUFBRSxhQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQzNCLElBQUksRUFBQyxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFO0lBQzFCLElBQUksRUFBQyxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFO0lBQzFCLEtBQUssRUFBQyxhQUFLLENBQUMsT0FBTyxDQUFDLEdBQUUsRUFBRSxDQUFBLGdCQUFRLENBQUM7Q0FDcEMsQ0FBQztLQUNHLFFBQVEsQ0FBQztJQUNWLE1BQU0sRUFBQyxDQUFDLE9BQU8sQ0FBQztDQUNuQixDQUFDLENBQUE7QUFFVyxRQUFBLFFBQVEsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtJQUM5QyxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUMzQixJQUFJLEVBQUMsYUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFFLEVBQUUsQ0FBQSxZQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLENBQUM7SUFDakQsS0FBSyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDbkIsT0FBTyxFQUFDLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDL0IsT0FBTyxFQUFDLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDL0IsVUFBVSxFQUFDLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDbEMsZ0JBQWdCLEVBQUMsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUN4QyxVQUFVLEVBQUMsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRTtJQUNoQyxNQUFNLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUNwQixJQUFJLEVBQUMsYUFBSyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFDOUIsVUFBVSxFQUFFLGFBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzFDLE1BQU0sRUFBQyxhQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztDQUNuQyxDQUFDLENBQUEifQ==