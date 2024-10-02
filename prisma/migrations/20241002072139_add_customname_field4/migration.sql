/*
  Warnings:

  - You are about to drop the `UserCustomName` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserCustomName" DROP CONSTRAINT "UserCustomName_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "customName" TEXT;

-- DropTable
DROP TABLE "UserCustomName";
