"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWidgetSchema = void 0;
const zod_1 = require("zod");
exports.ProductWidgetSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    metaTitle: zod_1.z.string().optional(),
    metaDescription: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvYWRtaW4vcHJvZHVjdHMvdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBcUI7QUFHUixRQUFBLG1CQUFtQixHQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDdkMsRUFBRSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDekIsU0FBUyxFQUFDLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDL0IsZUFBZSxFQUFDLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDckMsV0FBVyxFQUFDLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Q0FDcEMsQ0FBQyxDQUFBIn0=