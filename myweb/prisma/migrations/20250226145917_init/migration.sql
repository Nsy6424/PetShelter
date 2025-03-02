/*
  Warnings:

  - The primary key for the `donations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Amount` on the `donations` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `donations` table. All the data in the column will be lost.
  - You are about to drop the column `id_Donations` on the `donations` table. All the data in the column will be lost.
  - The primary key for the `eventparticipants` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_EventParticipants` on the `eventparticipants` table. All the data in the column will be lost.
  - The primary key for the `events` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_events` on the `events` table. All the data in the column will be lost.
  - The primary key for the `payments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_Payments` on the `payments` table. All the data in the column will be lost.
  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Description` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `Price` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `id_Products` on the `products` table. All the data in the column will be lost.
  - The primary key for the `schedule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_Schedule` on the `schedule` table. All the data in the column will be lost.
  - The primary key for the `vaitro_quyen` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `vaitro_quyen` table. All the data in the column will be lost.
  - You are about to drop the `pets` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `amount` to the `Donations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Donations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `EventParticipants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `VaiTro_Quyen` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `adoptions` DROP FOREIGN KEY `Adoptions_id_pets_fkey`;

-- DropForeignKey
ALTER TABLE `eventparticipants` DROP FOREIGN KEY `EventParticipants_id_events_fkey`;

-- DropForeignKey
ALTER TABLE `pets` DROP FOREIGN KEY `Pets_id_users_fkey`;

-- DropForeignKey
ALTER TABLE `schedule` DROP FOREIGN KEY `Schedule_id_events_fkey`;

-- DropForeignKey
ALTER TABLE `schedule` DROP FOREIGN KEY `Schedule_id_pets_fkey`;

-- DropIndex
DROP INDEX `Adoptions_id_pets_fkey` ON `adoptions`;

-- DropIndex
DROP INDEX `EventParticipants_id_events_fkey` ON `eventparticipants`;

-- DropIndex
DROP INDEX `Schedule_id_events_fkey` ON `schedule`;

-- DropIndex
DROP INDEX `Schedule_id_pets_fkey` ON `schedule`;

-- AlterTable
ALTER TABLE `donations` DROP PRIMARY KEY,
    DROP COLUMN `Amount`,
    DROP COLUMN `Name`,
    DROP COLUMN `id_Donations`,
    ADD COLUMN `amount` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `name` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `eventparticipants` DROP PRIMARY KEY,
    DROP COLUMN `id_EventParticipants`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `events` DROP PRIMARY KEY,
    DROP COLUMN `id_events`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `payments` DROP PRIMARY KEY,
    DROP COLUMN `id_Payments`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `products` DROP PRIMARY KEY,
    DROP COLUMN `Description`,
    DROP COLUMN `Price`,
    DROP COLUMN `id_Products`,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `price` DECIMAL(65, 30) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `schedule` DROP PRIMARY KEY,
    DROP COLUMN `id_Schedule`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `vaitro_quyen` DROP PRIMARY KEY,
    DROP COLUMN `Id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `pets`;

-- CreateTable
CREATE TABLE `Pet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `breed` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `age` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `vaccination` VARCHAR(191) NOT NULL,
    `personality` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PetToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PetToUser_AB_unique`(`A`, `B`),
    INDEX `_PetToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Adoptions` ADD CONSTRAINT `Adoptions_id_pets_fkey` FOREIGN KEY (`id_pets`) REFERENCES `Pet`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventParticipants` ADD CONSTRAINT `EventParticipants_id_events_fkey` FOREIGN KEY (`id_events`) REFERENCES `Events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_id_pets_fkey` FOREIGN KEY (`id_pets`) REFERENCES `Pet`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_id_events_fkey` FOREIGN KEY (`id_events`) REFERENCES `Events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PetToUser` ADD CONSTRAINT `_PetToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Pet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PetToUser` ADD CONSTRAINT `_PetToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
