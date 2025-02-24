/*
  Warnings:

  - You are about to drop the `permission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `role_permission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `adoptions` DROP FOREIGN KEY `Adoptions_id_users_fkey`;

-- DropForeignKey
ALTER TABLE `eventparticipants` DROP FOREIGN KEY `EventParticipants_id_users_fkey`;

-- DropForeignKey
ALTER TABLE `payments` DROP FOREIGN KEY `Payments_id_users_fkey`;

-- DropForeignKey
ALTER TABLE `pets` DROP FOREIGN KEY `Pets_id_users_fkey`;

-- DropForeignKey
ALTER TABLE `role_permission` DROP FOREIGN KEY `Role_Permission_id_Permission_fkey`;

-- DropForeignKey
ALTER TABLE `role_permission` DROP FOREIGN KEY `Role_Permission_id_Roles_fkey`;

-- DropForeignKey
ALTER TABLE `schedule` DROP FOREIGN KEY `Schedule_id_users_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_id_Roles_fkey`;

-- DropIndex
DROP INDEX `Adoptions_id_users_fkey` ON `adoptions`;

-- DropIndex
DROP INDEX `EventParticipants_id_users_fkey` ON `eventparticipants`;

-- DropIndex
DROP INDEX `Payments_id_users_fkey` ON `payments`;

-- DropIndex
DROP INDEX `Pets_id_users_fkey` ON `pets`;

-- DropIndex
DROP INDEX `Schedule_id_users_fkey` ON `schedule`;

-- DropTable
DROP TABLE `permission`;

-- DropTable
DROP TABLE `role_permission`;

-- DropTable
DROP TABLE `roles`;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `VaiTro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Ten` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `UserName` VARCHAR(255) NOT NULL,
    `MatKhau` VARCHAR(225) NULL,
    `Hoten` VARCHAR(225) NULL,
    `phone` VARCHAR(15) NULL,
    `email` VARCHAR(100) NULL,
    `MaVaiTro` INTEGER NOT NULL,

    UNIQUE INDEX `User_UserName_key`(`UserName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Quyen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Ten` VARCHAR(191) NOT NULL,
    `MoTa` LONGTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VaiTro_Quyen` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `MaVaiTro` INTEGER NOT NULL,
    `MaQuyen` INTEGER NOT NULL,
    `Ten` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_MaVaiTro_fkey` FOREIGN KEY (`MaVaiTro`) REFERENCES `VaiTro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pets` ADD CONSTRAINT `Pets_id_users_fkey` FOREIGN KEY (`id_users`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Adoptions` ADD CONSTRAINT `Adoptions_id_users_fkey` FOREIGN KEY (`id_users`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventParticipants` ADD CONSTRAINT `EventParticipants_id_users_fkey` FOREIGN KEY (`id_users`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_id_users_fkey` FOREIGN KEY (`id_users`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payments` ADD CONSTRAINT `Payments_id_users_fkey` FOREIGN KEY (`id_users`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VaiTro_Quyen` ADD CONSTRAINT `VaiTro_Quyen_MaVaiTro_fkey` FOREIGN KEY (`MaVaiTro`) REFERENCES `VaiTro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VaiTro_Quyen` ADD CONSTRAINT `VaiTro_Quyen_MaQuyen_fkey` FOREIGN KEY (`MaQuyen`) REFERENCES `Quyen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
