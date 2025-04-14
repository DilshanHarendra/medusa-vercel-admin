"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuSchema = exports.MenuItemSchema = void 0;
const zod_1 = require("zod");
exports.MenuItemSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    label: zod_1.z.string().min(1, "Label is required"),
    link: zod_1.z.string().min(1, "Url is required"),
    parent: zod_1.z.string(),
    children: zod_1.z.lazy(() => exports.MenuItemSchema.array()).optional(),
});
exports.MenuSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string().min(1, "Menu Name required"),
    children: zod_1.z.lazy(() => exports.MenuItemSchema.array()).optional(), // Recursive type
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvYWRtaW4vbWVudS92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUFxQjtBQUlSLFFBQUEsY0FBYyxHQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDbEMsRUFBRSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDekIsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLG1CQUFtQixDQUFDO0lBQzdDLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQztJQUMxQyxNQUFNLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUNsQixRQUFRLEVBQUUsT0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBYyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO0NBQzVELENBQUMsQ0FBQTtBQUVXLFFBQUEsVUFBVSxHQUFjLE9BQUMsQ0FBQyxNQUFNLENBQUM7SUFDMUMsRUFBRSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDekIsSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDO0lBQzdDLFFBQVEsRUFBRSxPQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFjLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxpQkFBaUI7Q0FDL0UsQ0FBQyxDQUFDIn0=