"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = exports.Menu = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.Menu = utils_1.model.define('menu', {
    id: utils_1.model.id().primaryKey(),
    name: utils_1.model.text().unique(),
    children: utils_1.model.hasMany(() => exports.MenuItem)
})
    .cascades({
    delete: ["children"]
});
exports.MenuItem = utils_1.model.define('menu_items', {
    id: utils_1.model.id().primaryKey(),
    menu: utils_1.model.belongsTo(() => exports.Menu, { mappedBy: 'menuItems' }),
    label: utils_1.model.text(),
    link: utils_1.model.text(),
    parent: utils_1.model.text()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL21lbnUvbW9kZWxzL21lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQStDO0FBRWxDLFFBQUEsSUFBSSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQ3JDLEVBQUUsRUFBRSxhQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQzNCLElBQUksRUFBQyxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFO0lBQzFCLFFBQVEsRUFBQyxhQUFLLENBQUMsT0FBTyxDQUFDLEdBQUUsRUFBRSxDQUFBLGdCQUFRLENBQUM7Q0FDdkMsQ0FBQztLQUNHLFFBQVEsQ0FBQztJQUNWLE1BQU0sRUFBQyxDQUFDLFVBQVUsQ0FBQztDQUN0QixDQUFDLENBQUE7QUFFVyxRQUFBLFFBQVEsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtJQUMvQyxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUMzQixJQUFJLEVBQUMsYUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFFLEVBQUUsQ0FBQSxZQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLENBQUM7SUFDckQsS0FBSyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDbkIsSUFBSSxFQUFDLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDakIsTUFBTSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7Q0FDdkIsQ0FBQyxDQUFBIn0=