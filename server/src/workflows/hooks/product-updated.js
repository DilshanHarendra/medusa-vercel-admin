"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_flows_1 = require("@medusajs/medusa/core-flows");
const update_productWidget_1 = require("../productWidget/update-productWidget");
core_flows_1.updateProductsWorkflow.hooks.productsUpdated(async ({ products, additional_data }, { container }) => {
    const workflow = (0, update_productWidget_1.updateProductWidgetWorkflow)(container);
    for (const product of products) {
        console.log({
            product,
            widget: additional_data?.widget
        });
        await workflow.run({
            input: {
                product,
                widget: additional_data?.widget
            },
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC11cGRhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9ob29rcy9wcm9kdWN0LXVwZGF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0REFBb0U7QUFDcEUsZ0ZBRThDO0FBSTlDLG1DQUFzQixDQUFDLEtBQUssQ0FBQyxlQUFlLENBQ3hDLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDbkQsTUFBTSxRQUFRLEdBQUcsSUFBQSxrREFBMkIsRUFBQyxTQUFTLENBQUMsQ0FBQTtJQUN2RCxLQUFLLE1BQU0sT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUU7WUFDVCxPQUFPO1lBQ1AsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNO1NBQ2xDLENBQUMsQ0FBQTtRQUNGLE1BQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRTtnQkFDSCxPQUFPO2dCQUNQLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTTthQUNaO1NBQzFCLENBQUMsQ0FBQTtJQUNOLENBQUM7QUFDTCxDQUFDLENBQ0osQ0FBQSJ9