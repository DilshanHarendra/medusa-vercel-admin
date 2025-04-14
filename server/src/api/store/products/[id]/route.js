"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [product] } = await query.graph({
        entity: "product",
        fields: ["*", "product_widget.*"],
        filters: {
            id: req.params.id,
        },
    });
    if (!product) {
        res.status(410).json({ message: "Product not found" });
        return;
    }
    const widget = {
        id: '',
        description: '',
        metaTitle: '',
        metaDescription: ''
    };
    // @ts-ignore
    if (product?.product_widget?.id) {
        // @ts-ignore
        widget.id = product.product_widget.id;
        // @ts-ignore
        widget.description = product.product_widget.description;
        // @ts-ignore
        widget.metaTitle = product.product_widget.meta_title;
        // @ts-ignore
        widget.metaDescription = product.product_widget.meta_description;
    }
    // @ts-ignore
    product.widget = widget;
    // @ts-ignore
    delete product.product_widget;
    return res.json({ product });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3Byb2R1Y3RzL1tpZF0vcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQW9FO0FBSTdELE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUVqRSxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUMsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDO1FBQ2pDLE9BQU8sRUFBRTtZQUNMLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7U0FDcEI7S0FDSixDQUFDLENBQUE7SUFDRixJQUFJLENBQUMsT0FBTyxFQUFDLENBQUM7UUFDVixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxDQUFDLENBQUE7UUFDbkQsT0FBTTtJQUNWLENBQUM7SUFHRCxNQUFNLE1BQU0sR0FBa0I7UUFDMUIsRUFBRSxFQUFDLEVBQUU7UUFDTCxXQUFXLEVBQUMsRUFBRTtRQUNkLFNBQVMsRUFBQyxFQUFFO1FBQ1osZUFBZSxFQUFDLEVBQUU7S0FDckIsQ0FBQTtJQUNELGFBQWE7SUFDYixJQUFJLE9BQU8sRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDOUIsYUFBYTtRQUNiLE1BQU0sQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUE7UUFDckMsYUFBYTtRQUNiLE1BQU0sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUE7UUFDdkQsYUFBYTtRQUNiLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUE7UUFDcEQsYUFBYTtRQUNiLE1BQU0sQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQTtJQUNwRSxDQUFDO0lBQ0QsYUFBYTtJQUNiLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3ZCLGFBQWE7SUFDYixPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUE7SUFDN0IsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQTtBQUM5QixDQUFDLENBQUE7QUF2Q1ksUUFBQSxHQUFHLE9BdUNmIn0=