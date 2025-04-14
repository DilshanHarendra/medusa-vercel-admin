"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const productWidget_1 = __importDefault(require("../modules/productWidget"));
const product_1 = __importDefault(require("@medusajs/medusa/product"));
exports.default = (0, utils_1.defineLink)(product_1.default.linkable.product, {
    linkable: productWidget_1.default.linkable.productWidget,
    deleteCascade: true,
}, {
    database: {
        table: "product_product_widget",
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC13aWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlua3MvcHJvZHVjdC13aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBc0Q7QUFDdEQsNkVBQW9EO0FBQ3BELHVFQUFvRDtBQUVwRCxrQkFBZSxJQUFBLGtCQUFVLEVBQ3JCLGlCQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFDOUI7SUFDSSxRQUFRLEVBQUUsdUJBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYTtJQUM5QyxhQUFhLEVBQUUsSUFBSTtDQUN0QixFQUNEO0lBQ0ksUUFBUSxFQUFFO1FBQ04sS0FBSyxFQUFFLHdCQUF3QjtLQUNsQztDQUNKLENBRUosQ0FBQSJ9