"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250412093316 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250412093316 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "review" ("id" text not null, "title" text null, "content" text not null, "rating" real not null, "first_name" text not null, "last_name" text not null, "status" text check ("status" in ('pending', 'approved', 'rejected')) not null default 'pending', "product_id" text not null, "customer_id" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "review_pkey" primary key ("id"), constraint rating_range check (rating >= 1 AND rating <= 5));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_REVIEW_PRODUCT_ID" ON "review" (product_id) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_review_deleted_at" ON "review" (deleted_at) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop table if exists "review" cascade;`);
    }
}
exports.Migration20250412093316 = Migration20250412093316;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTA0MTIwOTMzMTYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9yZXZpZXcvbWlncmF0aW9ucy9NaWdyYXRpb24yMDI1MDQxMjA5MzMxNi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBa0Q7QUFFbEQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUUzQyxLQUFLLENBQUMsRUFBRTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsd2pCQUF3akIsQ0FBQyxDQUFDO1FBQ3RrQixJQUFJLENBQUMsTUFBTSxDQUFDLHVHQUF1RyxDQUFDLENBQUM7UUFDckgsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1R0FBdUcsQ0FBQyxDQUFDO0lBQ3ZILENBQUM7SUFFUSxLQUFLLENBQUMsSUFBSTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLHdDQUF3QyxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUVGO0FBWkQsMERBWUMifQ==