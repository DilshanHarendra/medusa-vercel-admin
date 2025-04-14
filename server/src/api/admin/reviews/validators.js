"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostStoreReviewSchema = void 0;
const zod_1 = require("zod");
exports.PostStoreReviewSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    content: zod_1.z.string(),
    rating: zod_1.z.preprocess((val) => {
        if (val && typeof val === "string") {
            return parseInt(val);
        }
        return val;
    }, zod_1.z.number().min(1).max(5)),
    product_id: zod_1.z.string(),
    first_name: zod_1.z.string(),
    last_name: zod_1.z.string(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvYWRtaW4vcmV2aWV3cy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUFzQjtBQUVULFFBQUEscUJBQXFCLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUMxQyxLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM1QixPQUFPLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUNuQixNQUFNLEVBQUUsT0FBQyxDQUFDLFVBQVUsQ0FDaEIsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNKLElBQUksR0FBRyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3hCLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQTtJQUNkLENBQUMsRUFDRCxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDM0I7SUFDRCxVQUFVLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUN0QixVQUFVLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtJQUN0QixTQUFTLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtDQUN4QixDQUFDLENBQUEifQ==