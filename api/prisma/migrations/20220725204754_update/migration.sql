/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `event_owner` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpfCpnj]` on the table `event_owner` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `event_owner` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `cpfCpnj` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `event_owner_email_key` ON `event_owner`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `event_owner_cpfCpnj_key` ON `event_owner`(`cpfCpnj`);
