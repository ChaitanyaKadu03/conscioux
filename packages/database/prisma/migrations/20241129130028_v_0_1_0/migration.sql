/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "E_isPremium" AS ENUM ('FREE', 'PREMIUM', 'INFINITY');

-- CreateEnum
CREATE TYPE "E_theme" AS ENUM ('Dark');

-- CreateEnum
CREATE TYPE "E_currency" AS ENUM ('Dollars', 'Rupees');

-- CreateEnum
CREATE TYPE "E_country" AS ENUM ('India', 'USA', 'UAE', 'UK');

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "contact" TEXT,
    "isPremium" "E_isPremium" NOT NULL DEFAULT 'FREE',
    "stats" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    "observeId" TEXT NOT NULL,
    "settingsId" TEXT NOT NULL,
    "securityId" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Observe" (
    "id" TEXT NOT NULL,
    "list" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Observe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Settings" (
    "id" TEXT NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'English',
    "theme" "E_theme" NOT NULL DEFAULT 'Dark',
    "currency" "E_currency" NOT NULL DEFAULT 'Dollars',
    "country" "E_country" NOT NULL DEFAULT 'USA',

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Security" (
    "id" TEXT NOT NULL,
    "two_factor_auth" BOOLEAN NOT NULL DEFAULT false,
    "email_auth" BOOLEAN NOT NULL DEFAULT false,
    "databaseSession" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "loginIps" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "Security_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_contact_key" ON "Profile"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_observeId_key" ON "Profile"("observeId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_settingsId_key" ON "Profile"("settingsId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_securityId_key" ON "Profile"("securityId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_observeId_fkey" FOREIGN KEY ("observeId") REFERENCES "Observe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_settingsId_fkey" FOREIGN KEY ("settingsId") REFERENCES "Settings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_securityId_fkey" FOREIGN KEY ("securityId") REFERENCES "Security"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
