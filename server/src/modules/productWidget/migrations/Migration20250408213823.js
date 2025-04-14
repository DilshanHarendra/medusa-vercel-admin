"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250408213823 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250408213823 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "product_widget" drop constraint if exists "product_widget_meta_title_unique";`);
        this.addSql(`create table if not exists "product_widget" ("id" text not null, "description" text not null, "meta_title" text not null, "meta_description" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "product_widget_pkey" primary key ("id"));`);
        this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_product_widget_meta_title_unique" ON "product_widget" (meta_title) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_product_widget_deleted_at" ON "product_widget" (deleted_at) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop table if exists "product_widget" cascade;`);
    }
}
exports.Migration20250408213823 = Migration20250408213823;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTA0MDgyMTM4MjMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0V2lkZ2V0L21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNTA0MDgyMTM4MjMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFM0MsS0FBSyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLHNHQUFzRyxDQUFDLENBQUM7UUFDcEgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvVkFBb1YsQ0FBQyxDQUFDO1FBQ2xXLElBQUksQ0FBQyxNQUFNLENBQUMscUlBQXFJLENBQUMsQ0FBQztRQUNuSixJQUFJLENBQUMsTUFBTSxDQUFDLHVIQUF1SCxDQUFDLENBQUM7SUFDdkksQ0FBQztJQUVRLEtBQUssQ0FBQyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsZ0RBQWdELENBQUMsQ0FBQztJQUNoRSxDQUFDO0NBRUY7QUFiRCwwREFhQyJ9