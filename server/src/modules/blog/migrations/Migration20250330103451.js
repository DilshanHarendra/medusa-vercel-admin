"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250330103451 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250330103451 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "blog_post" drop constraint if exists "blog_post_url_handle_unique";`);
        this.addSql(`alter table if exists "blog" drop constraint if exists "blog_slug_unique";`);
        this.addSql(`alter table if exists "blog" drop constraint if exists "blog_name_unique";`);
        this.addSql(`create table if not exists "blog" ("id" text not null, "name" text not null, "slug" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "blog_pkey" primary key ("id"));`);
        this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_blog_name_unique" ON "blog" (name) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_blog_slug_unique" ON "blog" (slug) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_blog_deleted_at" ON "blog" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`create table if not exists "blog_post" ("id" text not null, "blog_id" text not null, "title" text not null, "content" text null, "excerpt" text null, "page_title" text null, "meta_description" text null, "url_handle" text not null, "author" text not null, "tags" text[] not null default '{}', "visibility" boolean not null default false, "images" text[] not null default '{}', "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "blog_post_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_blog_post_blog_id" ON "blog_post" (blog_id) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_blog_post_url_handle_unique" ON "blog_post" (url_handle) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_blog_post_deleted_at" ON "blog_post" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`alter table if exists "blog_post" add constraint "blog_post_blog_id_foreign" foreign key ("blog_id") references "blog" ("id") on update cascade on delete cascade;`);
    }
    async down() {
        this.addSql(`alter table if exists "blog_post" drop constraint if exists "blog_post_blog_id_foreign";`);
        this.addSql(`drop table if exists "blog" cascade;`);
        this.addSql(`drop table if exists "blog_post" cascade;`);
    }
}
exports.Migration20250330103451 = Migration20250330103451;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAzMzAxMDM0NTEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9ibG9nL21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNTAzMzAxMDM0NTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFM0MsS0FBSyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLDRGQUE0RixDQUFDLENBQUM7UUFDMUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxNQUFNLENBQUMsNEVBQTRFLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsTUFBTSxDQUFDLGlSQUFpUixDQUFDLENBQUM7UUFDL1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxR0FBcUcsQ0FBQyxDQUFDO1FBQ25ILElBQUksQ0FBQyxNQUFNLENBQUMscUdBQXFHLENBQUMsQ0FBQztRQUNuSCxJQUFJLENBQUMsTUFBTSxDQUFDLG1HQUFtRyxDQUFDLENBQUM7UUFFakgsSUFBSSxDQUFDLE1BQU0sQ0FBQyw0aUJBQTRpQixDQUFDLENBQUM7UUFDMWpCLElBQUksQ0FBQyxNQUFNLENBQUMsdUdBQXVHLENBQUMsQ0FBQztRQUNySCxJQUFJLENBQUMsTUFBTSxDQUFDLDJIQUEySCxDQUFDLENBQUM7UUFDekksSUFBSSxDQUFDLE1BQU0sQ0FBQyw2R0FBNkcsQ0FBQyxDQUFDO1FBRTNILElBQUksQ0FBQyxNQUFNLENBQUMsb0tBQW9LLENBQUMsQ0FBQztJQUNwTCxDQUFDO0lBRVEsS0FBSyxDQUFDLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQywwRkFBMEYsQ0FBQyxDQUFDO1FBRXhHLElBQUksQ0FBQyxNQUFNLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsTUFBTSxDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztDQUVGO0FBM0JELDBEQTJCQyJ9