"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const create_review_1 = require("../../../workflows/review/create-review");
const POST = async (req, res) => {
    const input = req.validatedBody;
    const { result } = await (0, create_review_1.createReviewWorkflow)(req.scope)
        .run({
        input: {
            ...input,
            customer_id: req.auth_context?.actor_id,
        },
    });
    res.json(result);
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3Jldmlld3Mvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsMkVBQThFO0FBT3ZFLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDckIsR0FBbUQsRUFDbkQsR0FBbUIsRUFDckIsRUFBRTtJQUNBLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUE7SUFFL0IsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBQSxvQ0FBb0IsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ25ELEdBQUcsQ0FBQztRQUNELEtBQUssRUFBRTtZQUNILEdBQUcsS0FBSztZQUNSLFdBQVcsRUFBRSxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVE7U0FDMUM7S0FDSixDQUFDLENBQUE7SUFFTixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3BCLENBQUMsQ0FBQTtBQWZZLFFBQUEsSUFBSSxRQWVoQiJ9