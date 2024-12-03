/*
  Warnings:

  - You are about to drop the column `settingsId` on the `Profile` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_settingsId_fkey";

-- DropIndex
DROP INDEX "Profile_settingsId_key";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "settingsId";
