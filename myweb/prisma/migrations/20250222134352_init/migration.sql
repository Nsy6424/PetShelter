-- CreateTable
CREATE TABLE `Roles` (
    `id_Roles` INTEGER NOT NULL AUTO_INCREMENT,
    `TenRole` VARCHAR(191) NULL,

    PRIMARY KEY (`id_Roles`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id_users` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `DiaChi` VARCHAR(191) NULL,
    `id_Roles` INTEGER NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id_users`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pets` (
    `id_pets` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `breed` VARCHAR(191) NULL,
    `age` INTEGER NULL,
    `health_status` VARCHAR(191) NULL,
    `id_users` INTEGER NOT NULL,

    PRIMARY KEY (`id_pets`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Adoptions` (
    `id_adoptions` INTEGER NOT NULL AUTO_INCREMENT,
    `id_users` INTEGER NULL,
    `id_pets` INTEGER NULL,
    `status` VARCHAR(191) NULL,

    PRIMARY KEY (`id_adoptions`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `events` (
    `id_events` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `Event_date` DATETIME(3) NULL,

    PRIMARY KEY (`id_events`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EventParticipants` (
    `id_EventParticipants` INTEGER NOT NULL AUTO_INCREMENT,
    `id_events` INTEGER NULL,
    `id_users` INTEGER NULL,

    PRIMARY KEY (`id_EventParticipants`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products` (
    `id_Products` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NULL,
    `Price` DECIMAL(65, 30) NOT NULL,
    `images` VARCHAR(191) NULL,

    PRIMARY KEY (`id_Products`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Donations` (
    `id_Donations` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phonenumber` VARCHAR(191) NULL,
    `Amount` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id_Donations`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Schedule` (
    `id_Schedule` INTEGER NOT NULL AUTO_INCREMENT,
    `id_users` INTEGER NOT NULL,
    `id_pets` INTEGER NULL,
    `id_events` INTEGER NULL,
    `Schedule_date` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NULL,

    PRIMARY KEY (`id_Schedule`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payments` (
    `id_Payments` INTEGER NOT NULL AUTO_INCREMENT,
    `id_users` INTEGER NOT NULL,
    `amount` DECIMAL(65, 30) NULL,
    `PaymentMethod` VARCHAR(191) NULL,

    PRIMARY KEY (`id_Payments`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Permission` (
    `id_Permission` INTEGER NOT NULL AUTO_INCREMENT,
    `TenPermission` VARCHAR(191) NULL,

    PRIMARY KEY (`id_Permission`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role_Permission` (
    `idRole_Permission` INTEGER NOT NULL AUTO_INCREMENT,
    `id_Roles` INTEGER NOT NULL,
    `id_Permission` INTEGER NOT NULL,

    PRIMARY KEY (`idRole_Permission`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_id_Roles_fkey` FOREIGN KEY (`id_Roles`) REFERENCES `Roles`(`id_Roles`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pets` ADD CONSTRAINT `Pets_id_users_fkey` FOREIGN KEY (`id_users`) REFERENCES `users`(`id_users`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Adoptions` ADD CONSTRAINT `Adoptions_id_users_fkey` FOREIGN KEY (`id_users`) REFERENCES `users`(`id_users`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Adoptions` ADD CONSTRAINT `Adoptions_id_pets_fkey` FOREIGN KEY (`id_pets`) REFERENCES `Pets`(`id_pets`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventParticipants` ADD CONSTRAINT `EventParticipants_id_events_fkey` FOREIGN KEY (`id_events`) REFERENCES `events`(`id_events`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventParticipants` ADD CONSTRAINT `EventParticipants_id_users_fkey` FOREIGN KEY (`id_users`) REFERENCES `users`(`id_users`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_id_users_fkey` FOREIGN KEY (`id_users`) REFERENCES `users`(`id_users`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_id_pets_fkey` FOREIGN KEY (`id_pets`) REFERENCES `Pets`(`id_pets`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_id_events_fkey` FOREIGN KEY (`id_events`) REFERENCES `events`(`id_events`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payments` ADD CONSTRAINT `Payments_id_users_fkey` FOREIGN KEY (`id_users`) REFERENCES `users`(`id_users`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Role_Permission` ADD CONSTRAINT `Role_Permission_id_Roles_fkey` FOREIGN KEY (`id_Roles`) REFERENCES `Roles`(`id_Roles`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Role_Permission` ADD CONSTRAINT `Role_Permission_id_Permission_fkey` FOREIGN KEY (`id_Permission`) REFERENCES `Permission`(`id_Permission`) ON DELETE RESTRICT ON UPDATE CASCADE;
