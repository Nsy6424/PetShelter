/*
  Warnings:

  - The primary key for the `roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_Roles` on the `roles` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_users` on the `users` table. All the data in the column will be lost.
  - Added the required column `id` to the `Roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `users` table without a default value. This is not possible if the table is not empty.

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
DROP INDEX `Role_Permission_id_Roles_fkey` ON `role_permission`;

-- DropIndex
DROP INDEX `Schedule_id_users_fkey` ON `schedule`;

-- DropIndex
DROP INDEX `users_id_Roles_fkey` ON `users`;

-- AlterTable
ALTER TABLE `roles` DROP PRIMARY KEY,
    DROP COLUMN `id_Roles`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    DROP COLUMN `id_users`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_id_Roles_fkey` FOREIGN KEY (`id_Roles`) REFERENCES `Roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pets` ADD CONSTRAINT `Pets_id_users_fkey` FOREIGN KEY (`id_users`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Adoptions` ADD CONSTRAINT `Adoptions_id_users_fkey` FOREIGN KEY (`id_users`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventParticipants` ADD CONSTRAINT `EventParticipants_id_users_fkey` FOREIGN KEY (`id_users`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_id_users_fkey` FOREIGN KEY (`id_users`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payments` ADD CONSTRAINT `Payments_id_users_fkey` FOREIGN KEY (`id_users`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Role_Permission` ADD CONSTRAINT `Role_Permission_id_Roles_fkey` FOREIGN KEY (`id_Roles`) REFERENCES `Roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
