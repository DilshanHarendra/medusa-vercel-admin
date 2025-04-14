"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = exports.GetStoreReviewsSchema = void 0;
const utils_1 = require("@medusajs/framework/utils");
const review_1 = require("../../../../../modules/review");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
exports.GetStoreReviewsSchema = (0, validators_1.createFindParams)();
const GET = async (req, res) => {
    const { id } = req.params;
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const reviewModuleService = req.scope.resolve(review_1.PRODUCT_REVIEW_MODULE);
    // Get reviews for product
    const { data: reviews, metadata: { count, take, skip, } = { count: 0, take: 10, skip: 0 } } = await query.graph({
        entity: "review",
        filters: {
            product_id: id,
            // @ts-ignore
            status: "approved",
        },
        ...req.queryConfig,
    });
    console.log(reviews);
    res.json({
        reviews,
        count,
        limit: take,
        offset: skip,
        average_rating: await reviewModuleService.getAverageRating(id),
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3Byb2R1Y3RzL1tpZF0vcmV2aWV3cy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxxREFBcUU7QUFDckUsMERBQXFFO0FBRXJFLHNFQUF3RTtBQUUzRCxRQUFBLHFCQUFxQixHQUFHLElBQUEsNkJBQWdCLEdBQUUsQ0FBQTtBQUVoRCxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3BCLEdBQWtCLEVBQ2xCLEdBQW1CLEVBQ3JCLEVBQUU7SUFDQSxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtJQUV6QixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLG1CQUFtQixHQUErQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyw4QkFBcUIsQ0FBQyxDQUFBO0lBRWhHLDBCQUEwQjtJQUMxQixNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFDN0IsS0FBSyxFQUNMLElBQUksRUFDSixJQUFJLEdBQ1AsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDdEQsTUFBTSxFQUFFLFFBQVE7UUFDaEIsT0FBTyxFQUFFO1lBQ0wsVUFBVSxFQUFFLEVBQUU7WUFDZCxhQUFhO1lBQ2IsTUFBTSxFQUFFLFVBQVU7U0FDckI7UUFDRCxHQUFHLEdBQUcsQ0FBQyxXQUFXO0tBQ3JCLENBQUMsQ0FBQTtJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNMLE9BQU87UUFDUCxLQUFLO1FBQ0wsS0FBSyxFQUFFLElBQUk7UUFDWCxNQUFNLEVBQUUsSUFBSTtRQUNaLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztLQUNqRSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUEvQlksUUFBQSxHQUFHLE9BK0JmIn0=