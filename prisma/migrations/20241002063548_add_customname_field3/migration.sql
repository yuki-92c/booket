/*
  Warnings:

  - You are about to drop the column `customName` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "customName";

-- CreateTable
CREATE TABLE "UserCustomName" (
    "id" TEXT NOT NULL,
    "customName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserCustomName_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserCustomName" ADD CONSTRAINT "UserCustomName_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
