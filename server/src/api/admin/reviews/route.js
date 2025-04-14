"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = exports.GetAdminReviewsSchema = void 0;
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.GetAdminReviewsSchema = (0, validators_1.createFindParams)();
const GET = async (req, res) => {
    const query = req.scope.resolve("query");
    const { data: reviews, metadata: { count, take, skip } = {
        count: 0,
        take: 20,
        skip: 0,
    }, } = await query.graph({
        ...req.queryConfig,
        entity: "review",
    });
    res.json({
        reviews,
        count,
        limit: take,
        offset: skip,
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3Jldmlld3Mvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsc0VBQXdFO0FBRTNELFFBQUEscUJBQXFCLEdBQUcsSUFBQSw2QkFBZ0IsR0FBRSxDQUFBO0FBRWhELE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDcEIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDckIsRUFBRTtJQUNBLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3hDLE1BQU0sRUFDRixJQUFJLEVBQUUsT0FBTyxFQUNiLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUc7UUFDOUIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxDQUFDO0tBQ1YsR0FDSixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNsQixHQUFHLEdBQUcsQ0FBQyxXQUFXO1FBQ2xCLE1BQU0sRUFBRSxRQUFRO0tBQ25CLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDTCxPQUFPO1FBQ1AsS0FBSztRQUNMLEtBQUssRUFBRSxJQUFJO1FBQ1gsTUFBTSxFQUFFLElBQUk7S0FDZixDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUF2QlksUUFBQSxHQUFHLE9BdUJmIn0=