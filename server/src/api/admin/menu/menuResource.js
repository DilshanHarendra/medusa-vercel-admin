"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenuItems = exports.getMenuRetrieveResponse = exports.getMenuCreateResponse = void 0;
const uuid_1 = require("uuid");
const getMenuCreateResponse = (menu) => {
    let arr = menu.children ? [...menu.children] : [];
    const mainMenuItems = [];
    arr.forEach((item, index) => {
        if (!item.parent) {
            mainMenuItems.push(extractMenuObject(item));
        }
    });
    arr.filter(item => !item.parent);
    mainMenuItems.forEach((item) => {
        item.children = arr.filter(child => child.parent === item.id);
        item.children = item.children.map(extractMenuObject);
    });
    return {
        id: menu.id,
        name: menu.name,
        children: mainMenuItems
    };
};
exports.getMenuCreateResponse = getMenuCreateResponse;
const extractMenuObject = (child) => {
    return {
        id: child.id,
        label: child.label,
        link: child.link,
        parent: child.parent,
        children: child.children || []
    };
};
const getMenuRetrieveResponse = (menu) => {
    const arr = [];
    menu.forEach((item) => {
        arr.push((0, exports.getMenuCreateResponse)(item));
    });
    return arr;
};
exports.getMenuRetrieveResponse = getMenuRetrieveResponse;
const getMenuItems = (payload) => {
    const create = [], update = [];
    const menu = {
        id: payload.id || (0, uuid_1.v4)().replace(/-/g, "").substring(0, 8),
        name: payload.name,
    };
    payload.children?.forEach((item) => {
        let parentId = item.id;
        if (parentId) {
            update.push({
                id: parentId,
                label: item.label,
                link: item.link,
                parent: '',
                menu: menu.id
            });
        }
        else {
            parentId = (0, uuid_1.v4)().replace(/-/g, "").substring(0, 8);
            create.push({
                id: parentId,
                label: item.label,
                link: item.link,
                parent: '',
                menu: menu.id
            });
        }
        item.children?.forEach(child => {
            const childId = child.id;
            if (childId) {
                update.push({
                    id: childId,
                    label: child.label,
                    link: child.link,
                    parent: parentId,
                    menu: menu.id
                });
            }
            else {
                create.push({
                    id: (0, uuid_1.v4)().replace(/-/g, "").substring(0, 8),
                    label: child.label,
                    link: child.link,
                    parent: parentId,
                    menu: menu.id
                });
            }
        });
    });
    return { create, update, menu };
};
exports.getMenuItems = getMenuItems;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudVJlc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9hZG1pbi9tZW51L21lbnVSZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBb0M7QUFJN0IsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLElBQWtCLEVBQWUsRUFBRTtJQUN0RSxJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUMsQ0FBQSxFQUFFLENBQUM7SUFDM0MsTUFBTSxhQUFhLEdBQVUsRUFBRSxDQUFBO0lBQy9CLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLEVBQUU7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQztZQUNkLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDRixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDOUIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBQyxFQUFFO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUEsRUFBRSxDQUFBLEtBQUssQ0FBQyxNQUFNLEtBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUN0RCxDQUFDLENBQUMsQ0FBQTtJQUVGLE9BQU87UUFDSCxFQUFFLEVBQUMsSUFBSSxDQUFDLEVBQUU7UUFDVixJQUFJ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