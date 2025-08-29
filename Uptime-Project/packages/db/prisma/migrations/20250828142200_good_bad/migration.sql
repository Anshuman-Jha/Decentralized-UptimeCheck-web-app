/*
  Warnings:

  - The values [UP,DOWN] on the enum `WebsiteStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."WebsiteStatus_new" AS ENUM ('GOOD', 'BAD');
ALTER TABLE "public"."WebsiteTicks" ALTER COLUMN "status" TYPE "public"."WebsiteStatus_new" USING ("status"::text::"public"."WebsiteStatus_new");
ALTER TYPE "public"."WebsiteStatus" RENAME TO "WebsiteStatus_old";
ALTER TYPE "public"."WebsiteStatus_new" RENAME TO "WebsiteStatus";
DROP TYPE "public"."WebsiteStatus_old";
COMMIT;
