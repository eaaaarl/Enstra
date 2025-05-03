-- CreateEnum
CREATE TYPE "PROGRAMS" AS ENUM ('CWTS', 'LTS', 'ROTC');

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "Programs" "PROGRAMS";
