-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "studentId" TEXT,
    "name" TEXT,
    "avatar" TEXT,
    "refreshToken" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "middlename" TEXT,
    "suffix" TEXT,
    "gender" TEXT NOT NULL,
    "date_birth" TIMESTAMP(3) NOT NULL,
    "place_birth" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "religion" TEXT,
    "weight" TEXT,
    "height" TEXT,
    "complexion" TEXT,
    "blood_type" TEXT,
    "street_address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state_province" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "mothers_name" TEXT NOT NULL,
    "mothers_occupation" TEXT,
    "fathers_name" TEXT NOT NULL,
    "fathers_occupation" TEXT,
    "emergency_name" TEXT NOT NULL,
    "emergency_relationship" TEXT NOT NULL,
    "emergency_address" TEXT NOT NULL,
    "emergency_phonenumber" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "school_year" TEXT NOT NULL,
    "grade" TEXT,
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_studentId_key" ON "User"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_student_id_key" ON "Student"("student_id");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
