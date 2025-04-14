"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250322131603 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250322131603 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "blog" drop constraint if exists "blog_name_unique";`);
        this.addSql(`create table if not exists "blog" ("id" text not null, "name" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "blog_pkey" primary key ("id"));`);
        this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_blog_name_unique" ON "blog" (name) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_blog_deleted_at" ON "blog" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`create table if not exists "blog_post" ("id" text not null, "blog_id" text not null, "title" text not null, "content" text null, "excerpt" text null, "pageTitle" text null, "metaDescription" text null, "urlHandle" text null, "author" text not null, "tags" text[] not null default '{}', "visibility" boolean not null default false, "images" text[] not null default '{}', "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "blog_post_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_blog_post_blog_id" ON "blog_post" (blog_id) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_blog_post_deleted_at" ON "blog_post" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`alter table if exists "blog_post" add constraint "blog_post_blog_id_foreign" foreign key ("blog_id") references "blog" ("id") on update cascade on delete cascade;`);
    }
    async down() {
        this.addSql(`alter table if exists "blog_post" drop constraint if exists "blog_post_blog_id_foreign";`);
        this.addSql(`drop table if exists "blog" cascade;`);
        this.addSql(`drop table if exists "blog_post" cascade;`);
    }
}
exports.Migration20250322131603 = Migration20250322131603;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAzMjIxMzE2MDMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9ibG9nL21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNTAzMjIxMzE2MDMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFM0MsS0FBSyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLDRFQUE0RSxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLE1BQU0sQ0FBQywyUEFBMlAsQ0FBQyxDQUFDO1FBQ3pRLElBQUksQ0FBQyxNQUFNLENBQUMscUdBQXFHLENBQUMsQ0FBQztRQUNuSCxJQUFJLENBQUMsTUFBTSxDQUFDLG1HQUFtRyxDQUFDLENBQUM7UUFFakgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxaUJBQXFpQixDQUFDLENBQUM7UUFDbmpCLElBQUksQ0FBQyxNQUFNLENBQUMsdUdBQXVHLENBQUMsQ0FBQztRQUNySCxJQUFJLENBQUMsTUFBTSxDQUFDLDZHQUE2RyxDQUFDLENBQUM7UUFFM0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvS0FBb0ssQ0FBQyxDQUFDO0lBQ3BMLENBQUM7SUFFUSxLQUFLLENBQUMsSUFBSTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLDBGQUEwRixDQUFDLENBQUM7UUFFeEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxNQUFNLENBQUMsMkNBQTJDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBRUY7QUF2QkQsMERBdUJDIn0=