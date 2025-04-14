"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const menu_1 = require("./models/menu");
class MenuModuleService extends (0, utils_1.MedusaService)({
    Menu: menu_1.Menu,
    MenuItem: menu_1.MenuItem
}) {
    constructor() {
        super(...arguments);
    }
}
exports.default = MenuModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL21lbnUvc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUF1RDtBQUN2RCx3Q0FBMkM7QUFFM0MsTUFBTSxpQkFBa0IsU0FBUSxJQUFBLHFCQUFhLEVBQUU7SUFDM0MsSUFBSSxFQUFKLFdBQUk7SUFDSixRQUFRLEVBQVIsZUFBUTtDQUNYLENBQUM7SUFDRTtRQUNJLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7Q0FHSjtBQUVELGtCQUFlLGlCQUFpQixDQUFBIn0=