"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250412205701 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250412205701 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "pages" drop constraint if exists "pages_url_handle_unique";`);
        this.addSql(`create table if not exists "pages" ("id" text not null, "title" text not null, "content" text null, "page_title" text null, "meta_description" text null, "url_handle" text not null, "visibility" boolean not null default false, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "pages_pkey" primary key ("id"));`);
        this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_pages_url_handle_unique" ON "pages" (url_handle) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_pages_deleted_at" ON "pages" (deleted_at) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop table if exists "pages" cascade;`);
    }
}
exports.Migration20250412205701 = Migration20250412205701;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTA0MTIyMDU3MDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wYWdlL21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNTA0MTIyMDU3MDEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFM0MsS0FBSyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLG9GQUFvRixDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrWkFBa1osQ0FBQyxDQUFDO1FBQ2hhLElBQUksQ0FBQyxNQUFNLENBQUMsbUhBQW1ILENBQUMsQ0FBQztRQUNqSSxJQUFJLENBQUMsTUFBTSxDQUFDLHFHQUFxRyxDQUFDLENBQUM7SUFDckgsQ0FBQztJQUVRLEtBQUssQ0FBQyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsdUNBQXVDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBRUY7QUFiRCwwREFhQyJ9