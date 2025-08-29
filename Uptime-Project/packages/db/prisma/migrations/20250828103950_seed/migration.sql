/*
  Warnings:

  - You are about to drop the column `latency` on the `Validators` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Validators" DROP COLUMN "latency",
ADD COLUMN     "pendingPayouts" INTEGER NOT NULL DEFAULT 0;
