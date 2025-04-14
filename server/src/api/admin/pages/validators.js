"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageSchema = void 0;
const zod_1 = require("zod");
exports.PageSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    title: zod_1.z.string().min(1, "Title is required"),
    content: zod_1.z.string().optional(),
    pageTitle: zod_1.z.string().optional(),
    metaDescription: zod_1.z.string().optional(),
    urlHandle: zod_1.z.string().min(1, "Post urlHandle is required"),
    visibility: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvYWRtaW4vcGFnZXMvdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBcUI7QUFHUixRQUFBLFVBQVUsR0FBRSxPQUFDLENBQUMsTUFBTSxDQUFDO0lBQzlCLEVBQUUsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ3pCLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxtQkFBbUIsQ0FBQztJQUM3QyxPQUFPLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM5QixTQUFTLEVBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUMvQixlQUFlLEVBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNyQyxTQUFTLEVBQUMsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsNEJBQTRCLENBQUM7SUFDekQsVUFBVSxFQUFFLE9BQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Q0FDckMsQ0FBQyxDQUFBIn0=