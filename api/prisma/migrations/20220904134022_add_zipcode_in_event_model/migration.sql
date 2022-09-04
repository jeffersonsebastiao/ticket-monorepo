/*
  Warnings:

  - Added the required column `zipCode` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` ADD COLUMN `zipCode` VARCHAR(191) NOT NULL;
