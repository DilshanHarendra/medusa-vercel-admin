"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
class WeightBasedFulfillmentProviderService extends utils_1.AbstractFulfillmentProviderService {
    constructor({ logger }, options) {
        super();
        this.logger_ = logger;
        this.options_ = options;
    }
    getFulfillmentOptions() {
        let arr = [];
        arr.push({
            id: "01",
            name: "Weight Based Fulfillment",
            service_code: "WeightBasedFulfillment",
        });
        // @ts-ignore
        return arr;
    }
    async canCalculate(data) {
        // assuming you have a client
        return true;
    }
    async calculatePrice(optionData, data, context) {
        // assuming the client can calculate the price using
        // the third-party service
        const price = 400;
        return {
            calculated_amount: price,
            // Update this boolean value based on your logic
            is_calculated_price_tax_inclusive: true,
        };
    }
    async createFulfillment(data, items, order, fulfillment) {
        // assuming the client creates a fulfillment
        // in the third-party service
        // const externalData = await this.client.create(
        //     fulfillment,
        //     items
        // )
        // @ts-ignore
        return {
            data: {
                ...(fulfillment.data || {}),
                ...{
                    'shoppDate': new Date(),
                    'sampleData': 'hi'
                }
            }
        };
    }
    async cancelFulfillment(data) {
        // assuming the client cancels a fulfillment
        // in the third-party service
        const { external_id } = data;
        console.log("call cancelFulfillment", data);
    }
    async getFulfillmentDocuments(data) {
        // assuming the client retrieves documents
        // from a third-party service
        console.log(data);
        return [];
    }
    async createReturnFulfillment(fulfillment) {
        // assuming the client creates a fulfillment for a return
        // in the third-party service
        // const externalData = await this.client.createReturn(
        //     fulfillment
        // )
        // @ts-ignore
        return {
            data: {
                ...(fulfillment.data || {}),
                ...{
                    'returnDate': new Date(),
                    'sampleData': 'hi'
                }
            }
        };
    }
    async getReturnDocuments(data) {
        // assuming the client retrieves documents
        // from a third-party service
        // return await this.client.documents(data)
        console.log(data);
        return [];
    }
    async getShipmentDocuments(data) {
        // assuming the client retrieves documents
        // from a third-party service
        // return await this.client.documents(data)
        console.log(data);
        return [];
    }
}
WeightBasedFulfillmentProviderService.identifier = "weight-based-fulfillment";
exports.default = WeightBasedFulfillmentProviderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3dlaWdodEJhc2VGdWxmaWxsbWVudC9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQThFO0FBaUI5RSxNQUFNLHFDQUFzQyxTQUFRLDBDQUFrQztJQU1sRixZQUNJLEVBQUUsTUFBTSxFQUF3QixFQUNoQyxPQUFnQjtRQUVoQixLQUFLLEVBQUUsQ0FBQTtRQUVQLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFBO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFBO0lBRTNCLENBQUM7SUFFRCxxQkFBcUI7UUFDakIsSUFBSSxHQUFHLEdBQXFCLEVBQUUsQ0FBQTtRQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ0wsRUFBRSxFQUFFLElBQUk7WUFDUixJQUFJLEVBQUUsMEJBQTBCO1lBQ2hDLFlBQVksRUFBRSx3QkFBd0I7U0FDekMsQ0FBQyxDQUFBO1FBQ0YsYUFBYTtRQUNiLE9BQU8sR0FBRyxDQUFBO0lBQ2QsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBNkI7UUFDNUMsNkJBQTZCO1FBQzdCLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLENBQ2hCLFVBQXlELEVBQ3pELElBQTZDLEVBQzdDLE9BQW1EO1FBRW5ELG9EQUFvRDtRQUNwRCwwQkFBMEI7UUFDMUIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQ2pCLE9BQU87WUFDSCxpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLGdEQUFnRDtZQUNoRCxpQ0FBaUMsRUFBRSxJQUFJO1NBQzFDLENBQUE7SUFDTCxDQUFDO0lBR0QsS0FBSyxDQUFDLGlCQUFpQixDQUNuQixJQUFTLEVBQ1QsS0FBVSxFQUNWLEtBQVUsRUFDVixXQUFnQjtRQUVoQiw0Q0FBNEM7UUFDNUMsNkJBQTZCO1FBQzdCLGlEQUFpRDtRQUNqRCxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLElBQUk7UUFFSixhQUFhO1FBQ2IsT0FBTztZQUNILElBQUksRUFBRTtnQkFDRixHQUFHLENBQUMsV0FBVyxDQUFDLElBQWMsSUFBSSxFQUFFLENBQUM7Z0JBQ3JDLEdBQUc7b0JBQ0MsV0FBVyxFQUFFLElBQUksSUFBSSxFQUFFO29CQUN2QixZQUFZLEVBQUMsSUFBSTtpQkFDcEI7YUFDSjtTQUNKLENBQUE7SUFDTCxDQUFDO0lBQ0QsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQTZCO1FBQ2pELDRDQUE0QztRQUM1Qyw2QkFBNkI7UUFDN0IsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLElBRXZCLENBQUE7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFFRCxLQUFLLENBQUMsdUJBQXVCLENBQUMsSUFBUztRQUNuQywwQ0FBMEM7UUFDMUMsNkJBQTZCO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakIsT0FBTyxFQUFFLENBQUE7SUFDYixDQUFDO0lBRUQsS0FBSyxDQUFDLHVCQUF1QixDQUFDLFdBQW9DO1FBQzlELHlEQUF5RDtRQUN6RCw2QkFBNkI7UUFDN0IsdURBQXVEO1FBQ3ZELGtCQUFrQjtRQUNsQixJQUFJO1FBRUosYUFBYTtRQUNiLE9BQU87WUFDSCxJQUFJLEVBQUU7Z0JBQ0YsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFjLElBQUksRUFBRSxDQUFDO2dCQUNyQyxHQUFHO29CQUNDLFlBQVksRUFBRSxJQUFJLElBQUksRUFBRTtvQkFDeEIsWUFBWSxFQUFDLElBQUk7aUJBQ3BCO2FBQ0o7U0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFTO1FBQzlCLDBDQUEwQztRQUMxQyw2QkFBNkI7UUFDN0IsMkNBQTJDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakIsT0FBTyxFQUFFLENBQUE7SUFDYixDQUFDO0lBRUQsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQVM7UUFDaEMsMENBQTBDO1FBQzFDLDZCQUE2QjtRQUM5QiwyQ0FBMkM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNqQixPQUFPLEVBQUUsQ0FBQTtJQUNiLENBQUM7O0FBdkhNLGdEQUFVLEdBQUcsMEJBQTBCLENBQUE7QUEySGxELGtCQUFlLHFDQUFxQyxDQUFBIn0=