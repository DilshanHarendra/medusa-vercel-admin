"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const blog_1 = require("./models/blog");
class BlogModuleService extends (0, utils_1.MedusaService)({
    Blog: blog_1.Blog,
    BlogPost: blog_1.BlogPost
}) {
    constructor() {
        super(...arguments);
    }
}
exports.default = BlogModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Jsb2cvc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUF1RDtBQUN2RCx3Q0FBMkM7QUFFM0MsTUFBTSxpQkFBa0IsU0FBUSxJQUFBLHFCQUFhLEVBQUU7SUFDM0MsSUFBSSxFQUFKLFdBQUk7SUFDSixRQUFRLEVBQVIsZUFBUTtDQUNYLENBQUM7SUFDRTtRQUNJLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7Q0FDSjtBQUVELGtCQUFlLGlCQUFpQixDQUFBIn0=