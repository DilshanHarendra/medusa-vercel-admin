"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const review_1 = __importDefault(require("./models/review"));
class ProductReviewModuleService extends (0, utils_1.MedusaService)({
    Review: review_1.default,
}) {
    async getAverageRating(productId, sharedContext) {
        const result = await sharedContext?.manager?.execute(`SELECT AVG(rating) as average 
       FROM review 
       WHERE product_id = '${productId}' AND status = 'approved'`);
        return parseFloat(parseFloat(result?.[0]?.average ?? 0).toFixed(2));
    }
}
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewModuleService.prototype, "getAverageRating", null);
exports.default = ProductReviewModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Jldmlldy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQXVGO0FBQ3ZGLDZEQUFvQztBQUlwQyxNQUFNLDBCQUEyQixTQUFRLElBQUEscUJBQWEsRUFBQztJQUNuRCxNQUFNLEVBQU4sZ0JBQU07Q0FDVCxDQUFDO0lBRVEsQUFBTixLQUFLLENBQUMsZ0JBQWdCLENBQ2xCLFNBQWlCLEVBQ0EsYUFBc0M7UUFFdkQsTUFBTSxNQUFNLEdBQUcsTUFBTSxhQUFhLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FDaEQ7OzZCQUVpQixTQUFTLDJCQUEyQixDQUN4RCxDQUFBO1FBRUQsT0FBTyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN2RSxDQUFDO0NBQ0o7QUFaUztJQURMLElBQUEscUJBQWEsR0FBRTtJQUdYLFdBQUEsSUFBQSxxQkFBYSxHQUFFLENBQUE7Ozs7a0VBU25CO0FBR0wsa0JBQWUsMEJBQTBCLENBQUEifQ==