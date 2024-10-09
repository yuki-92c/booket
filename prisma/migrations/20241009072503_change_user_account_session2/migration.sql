-- CreateTable
CREATE TABLE "User" (
    "name" TEXT,
    "id" TEXT NOT NULL,
    "authId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_authId_key" ON "User"("authId");
