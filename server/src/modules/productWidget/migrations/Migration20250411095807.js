"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250411095807 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250411095807 extends migrations_1.Migration {
    async up() {
        this.addSql(`drop index if exists "IDX_product_widget_meta_title_unique";`);
    }
    async down() {
        this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_product_widget_meta_title_unique" ON "product_widget" (meta_title) WHERE deleted_at IS NULL;`);
    }
}
exports.Migration20250411095807 = Migration20250411095807;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTA0MTEwOTU4MDcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0V2lkZ2V0L21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNTA0MTEwOTU4MDcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFM0MsS0FBSyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLDhEQUE4RCxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVRLEtBQUssQ0FBQyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMscUlBQXFJLENBQUMsQ0FBQztJQUNySixDQUFDO0NBRUY7QUFWRCwwREFVQyJ9