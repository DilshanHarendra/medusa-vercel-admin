"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.Page = utils_1.model.define('pages', {
    id: utils_1.model.id().primaryKey(),
    title: utils_1.model.text(),
    content: utils_1.model.text().nullable(),
    page_title: utils_1.model.text().nullable(),
    meta_description: utils_1.model.text().nullable(),
    url_handle: utils_1.model.text().unique(),
    visibility: utils_1.model.boolean().default(false),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3BhZ2UvbW9kZWxzL3BhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQStDO0FBRWxDLFFBQUEsSUFBSSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO0lBQ3RDLEVBQUUsRUFBRSxhQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQzNCLEtBQUssRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFO0lBQ25CLE9BQU8sRUFBQyxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQy9CLFVBQVUsRUFBQyxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ2xDLGdCQUFnQixFQUFDLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDeEMsVUFBVSxFQUFDLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUU7SUFDaEMsVUFBVSxFQUFFLGFBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0NBQzdDLENBQUMsQ0FBQSJ9