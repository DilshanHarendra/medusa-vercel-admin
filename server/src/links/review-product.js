"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const review_1 = __importDefault(require("../modules/review"));
const product_1 = __importDefault(require("@medusajs/medusa/product"));
exports.default = (0, utils_1.defineLink)({
    linkable: review_1.default.linkable.review,
    field: "product_id",
    isList: false,
}, product_1.default.linkable.product, {
    readOnly: true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXByb2R1Y3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlua3MvcmV2aWV3LXByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBc0Q7QUFDdEQsK0RBQW1EO0FBQ25ELHVFQUFvRDtBQUVwRCxrQkFBZSxJQUFBLGtCQUFVLEVBQ3JCO0lBQ0ksUUFBUSxFQUFFLGdCQUFtQixDQUFDLFFBQVEsQ0FBQyxNQUFNO0lBQzdDLEtBQUssRUFBRSxZQUFZO0lBQ25CLE1BQU0sRUFBRSxLQUFLO0NBQ2hCLEVBQ0QsaUJBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUM5QjtJQUNJLFFBQVEsRUFBRSxJQUFJO0NBQ2pCLENBQ0osQ0FBQSJ9