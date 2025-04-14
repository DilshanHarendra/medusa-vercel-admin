"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWidget = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.ProductWidget = utils_1.model.define('product_widget', {
    id: utils_1.model.id().primaryKey(),
    description: utils_1.model.text(),
    meta_title: utils_1.model.text(),
    meta_description: utils_1.model.text(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFdpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RXaWRnZXQvbW9kZWxzL3Byb2R1Y3RXaWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQStDO0FBRWxDLFFBQUEsYUFBYSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7SUFDeEQsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsV0FBVyxFQUFDLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDeEIsVUFBVSxFQUFDLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDdkIsZ0JBQWdCLEVBQUMsYUFBSyxDQUFDLElBQUksRUFBRTtDQUNoQyxDQUFDLENBQUEifQ==