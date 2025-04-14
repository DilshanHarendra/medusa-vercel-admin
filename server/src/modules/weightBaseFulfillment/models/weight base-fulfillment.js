"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentWeightBase = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.FulfillmentWeightBase = utils_1.model.define('fulfillment_weight_base', {
    id: utils_1.model.id().primaryKey(),
    locations: utils_1.model.array().default([]),
    price: utils_1.model.number().nullable(),
    additional_price: utils_1.model.number().nullable(),
    unit: utils_1.model.text().nullable(),
})
    .checks([
    {
        name: "price_range",
        expression: (columns) => `${columns.price} >= 0`,
    },
    {
        name: "additional_price_range",
        expression: (columns) => `${columns.additional_price} >= 0`,
    },
    {
        name: "unit_range",
        expression: (columns) => `${columns.unit} >= 0`,
    },
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VpZ2h0IGJhc2UtZnVsZmlsbG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy93ZWlnaHRCYXNlRnVsZmlsbG1lbnQvbW9kZWxzL3dlaWdodCBiYXNlLWZ1bGZpbGxtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUErQztBQUVsQyxRQUFBLHFCQUFxQixHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMseUJBQXlCLEVBQUU7SUFDekUsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsU0FBUyxFQUFFLGFBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBQ3BDLEtBQUssRUFBQyxhQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQy9CLGdCQUFnQixFQUFDLGFBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDMUMsSUFBSSxFQUFDLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Q0FDL0IsQ0FBQztLQUNHLE1BQU0sQ0FBQztJQUNKO1FBQ0ksSUFBSSxFQUFFLGFBQWE7UUFDbkIsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLE9BQU87S0FDbkQ7SUFDRDtRQUNJLElBQUksRUFBRSx3QkFBd0I7UUFDOUIsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsT0FBTztLQUM5RDtJQUNEO1FBQ0ksSUFBSSxFQUFFLFlBQVk7UUFDbEIsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLE9BQU87S0FDbEQ7Q0FDUixDQUFDLENBQUEifQ==