-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "confirmPassword" TEXT,
    "createdAt" TEXT,
    "updatedAt" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
