-- DropIndex
DROP INDEX "Student_userId_key";

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "userId" DROP NOT NULL;
