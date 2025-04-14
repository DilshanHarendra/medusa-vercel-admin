"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250316081635 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250316081635 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "menu" drop constraint if exists "menu_name_unique";`);
        this.addSql(`create table if not exists "menu" ("id" text not null, "name" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "menu_pkey" primary key ("id"));`);
        this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_menu_name_unique" ON "menu" (name) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_menu_deleted_at" ON "menu" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`create table if not exists "menu_items" ("id" text not null, "menu_id" text not null, "label" text not null, "link" text not null, "parent" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "menu_items_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_menu_items_menu_id" ON "menu_items" (menu_id) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_menu_items_deleted_at" ON "menu_items" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`alter table if exists "menu_items" add constraint "menu_items_menu_id_foreign" foreign key ("menu_id") references "menu" ("id") on update cascade;`);
    }
    async down() {
        this.addSql(`alter table if exists "menu_items" drop constraint if exists "menu_items_menu_id_foreign";`);
        this.addSql(`drop table if exists "menu" cascade;`);
        this.addSql(`drop table if exists "menu_items" cascade;`);
    }
}
exports.Migration20250316081635 = Migration20250316081635;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAzMTYwODE2MzUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tZW51L21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNTAzMTYwODE2MzUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFM0MsS0FBSyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLDRFQUE0RSxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLE1BQU0sQ0FBQywyUEFBMlAsQ0FBQyxDQUFDO1FBQ3pRLElBQUksQ0FBQyxNQUFNLENBQUMscUdBQXFHLENBQUMsQ0FBQztRQUNuSCxJQUFJLENBQUMsTUFBTSxDQUFDLG1HQUFtRyxDQUFDLENBQUM7UUFFakgsSUFBSSxDQUFDLE1BQU0sQ0FBQywrVUFBK1UsQ0FBQyxDQUFDO1FBQzdWLElBQUksQ0FBQyxNQUFNLENBQUMseUdBQXlHLENBQUMsQ0FBQztRQUN2SCxJQUFJLENBQUMsTUFBTSxDQUFDLCtHQUErRyxDQUFDLENBQUM7UUFFN0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvSkFBb0osQ0FBQyxDQUFDO0lBQ3BLLENBQUM7SUFFUSxLQUFLLENBQUMsSUFBSTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLDRGQUE0RixDQUFDLENBQUM7UUFFMUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxNQUFNLENBQUMsNENBQTRDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBRUY7QUF2QkQsMERBdUJDIn0=