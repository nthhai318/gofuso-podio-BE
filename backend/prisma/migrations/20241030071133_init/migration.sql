/*
  Warnings:

  - Added the required column `appColor` to the `ProfileTheme` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appLogoUrl` to the `ProfileTheme` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProfileTheme" ADD COLUMN     "appColor" TEXT NOT NULL,
ADD COLUMN     "appLogoUrl" TEXT NOT NULL;
