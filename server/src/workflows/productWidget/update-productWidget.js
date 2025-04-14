"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductWidgetWorkflow = exports.createOrUpdateProductWidgetStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const productWidget_1 = require("../../modules/productWidget");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const utils_1 = require("@medusajs/framework/utils");
exports.createOrUpdateProductWidgetStep = (0, workflows_sdk_1.createStep)("createOruUpdate-product-widget", async (data, { container }) => {
    const productWidgetService = container.resolve(productWidget_1.PRODUCT_WIDGET_MODULE);
    let productWidget = {};
    if (!data) {
        return;
    }
    const formatData = {
        product_id: data.product.id,
        description: data.widget?.description || '',
        meta_title: data.widget?.metaTitle || '',
        meta_description: data.widget?.metaDescription || '',
    };
    if (data.widget?.id) {
        productWidget = await productWidgetService.updateProductWidgets({
            selector: {
                id: data.widget.id,
            },
            data: formatData
        });
    }
    else {
        productWidget = await productWidgetService.createProductWidgets(formatData);
    }
    const formatedData = {
        ...productWidget,
        metaTitle: productWidget.meta_title,
        metaDescription: productWidget.meta_description
    };
    // @ts-ignore
    delete formatedData.meta_title;
    // @ts-ignore
    delete formatedData.meta_description;
    return new workflows_sdk_1.StepResponse(productWidget);
});
exports.updateProductWidgetWorkflow = (0, workflows_sdk_1.createWorkflow)("update-product-widget", (input) => {
    //@ts-ignore
    const { data: products } = (0, core_flows_1.useQueryGraphStep)({
        entity: "product",
        fields: ["product_widget.*"],
        filters: {
            id: input.product.id,
        },
    });
    const updated = (0, workflows_sdk_1.when)("create-product-custom-link", {
        input,
        products,
    }, (data) => data.products[0].id != undefined && data.input.widget != undefined)
        .then(() => {
        const widget = (0, exports.createOrUpdateProductWidgetStep)(input);
        (0, core_flows_1.createRemoteLinkStep)([{
                [utils_1.Modules.PRODUCT]: {
                    product_id: input.product.id,
                },
                [productWidget_1.PRODUCT_WIDGET_MODULE]: {
                    product_widget_id: widget.id
                },
            }]);
        return widget;
    });
    return new workflows_sdk_1.WorkflowResponse({
        updated,
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2R1Y3RXaWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3Byb2R1Y3RXaWRnZXQvdXBkYXRlLXByb2R1Y3RXaWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBSTBDO0FBRTFDLCtEQUFrRTtBQUVsRSw0REFBcUY7QUFDckYscURBQW1EO0FBSXRDLFFBQUEsK0JBQStCLEdBQUcsSUFBQSwwQkFBVSxFQUNyRCxnQ0FBZ0MsRUFDaEMsS0FBSyxFQUFFLElBQXlCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBRS9DLE1BQU0sb0JBQW9CLEdBQStCLFNBQVMsQ0FBQyxPQUFPLENBQ3RFLHFDQUFxQixDQUN4QixDQUFBO0lBRUQsSUFBSSxhQUFhLEdBQU0sRUFBRSxDQUFBO0lBQ3pCLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQztRQUNQLE9BQU07SUFDVixDQUFDO0lBRUQsTUFBTSxVQUFVLEdBQUM7UUFDYixVQUFVLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQzFCLFdBQVcsRUFBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFdBQVcsSUFBSSxFQUFFO1FBQzFDLFVBQVUsRUFBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsSUFBSSxFQUFFO1FBQ3ZDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxJQUFJLEVBQUU7S0FDdkQsQ0FBQTtJQUVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQztRQUNqQixhQUFhLEdBQUcsTUFBTSxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQztZQUM1RCxRQUFRLEVBQUM7Z0JBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTthQUNyQjtZQUNELElBQUksRUFBQyxVQUFVO1NBQ2xCLENBQUMsQ0FBQTtJQUNOLENBQUM7U0FBSSxDQUFDO1FBQ0YsYUFBYSxHQUFHLE1BQU0sb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDL0UsQ0FBQztJQUVELE1BQU0sWUFBWSxHQUFlO1FBQzdCLEdBQUcsYUFBYTtRQUNoQixTQUFTLEVBQUMsYUFBYSxDQUFDLFVBQVU7UUFDbEMsZUFBZSxFQUFDLGFBQWEsQ0FBQyxnQkFBZ0I7S0FDakQsQ0FBQTtJQUVELGFBQWE7SUFDYixPQUFPLFlBQVksQ0FBQyxVQUFVLENBQUE7SUFDOUIsYUFBYTtJQUNiLE9BQU8sWUFBWSxDQUFDLGdCQUFnQixDQUFBO0lBRXBDLE9BQU8sSUFBSSw0QkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBQzFDLENBQUMsQ0FDSixDQUFBO0FBSVksUUFBQSwyQkFBMkIsR0FBRyxJQUFBLDhCQUFjLEVBQ3JELHVCQUF1QixFQUN2QixDQUFDLEtBQTBCLEVBQUUsRUFBRTtJQUMzQixZQUFZO0lBQ1osTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFBLDhCQUFpQixFQUFDO1FBQ3pDLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE1BQU0sRUFBRSxDQUFDLGtCQUFrQixDQUFDO1FBQzVCLE9BQU8sRUFBRTtZQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7U0FDdkI7S0FDSixDQUFDLENBQUE7SUFFRixNQUFNLE9BQU8sR0FBRyxJQUFBLG9CQUFJLEVBQ2hCLDRCQUE0QixFQUM1QjtRQUNJLEtBQUs7UUFDTCxRQUFRO0tBQ1gsRUFDRCxDQUFDLElBQUksRUFBRSxFQUFFLENBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FDOUU7U0FDSSxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1AsTUFBTSxNQUFNLEdBQUksSUFBQSx1Q0FBK0IsRUFBQyxLQUFLLENBQUMsQ0FBQTtRQUN0RCxJQUFBLGlDQUFvQixFQUFDLENBQUM7Z0JBQ2xCLENBQUMsZUFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNmLFVBQVUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7aUJBQy9CO2dCQUNELENBQUMscUNBQXFCLENBQUMsRUFBRTtvQkFDckIsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLEVBQUU7aUJBQy9CO2FBQ0osQ0FBQyxDQUFDLENBQUE7UUFFSCxPQUFPLE1BQU0sQ0FBQTtJQUV6QixDQUFDLENBQUMsQ0FBQTtJQUNFLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQztRQUN4QixPQUFPO0tBQ1YsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUNKLENBQUEifQ==