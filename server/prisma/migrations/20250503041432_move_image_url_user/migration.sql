/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "imageUrl";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "imageUrl" TEXT;
