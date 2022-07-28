-- CreateTable
CREATE TABLE `validation_code` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hash` VARCHAR(191) NOT NULL,
    `expiredate` DATETIME(3) NOT NULL,
    `used` BOOLEAN NOT NULL DEFAULT false,
    `eventOwnerId` INTEGER NOT NULL,

    UNIQUE INDEX `validation_code_hash_key`(`hash`),
    UNIQUE INDEX `validation_code_eventOwnerId_key`(`eventOwnerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `validation_code` ADD CONSTRAINT `validation_code_eventOwnerId_fkey` FOREIGN KEY (`eventOwnerId`) REFERENCES `event_owner`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
