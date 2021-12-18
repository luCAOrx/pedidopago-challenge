-- CreateTable
CREATE TABLE `pharmacy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `logo` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(15) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `horarioDeFuncionamento` VARCHAR(191) NOT NULL,
    `responsavel` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `outros` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subsidiary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `logo` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(15) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `horarioDeFuncionamento` VARCHAR(191) NOT NULL,
    `responsavel` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `outros` VARCHAR(191) NULL,
    `farmacia_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `subsidiary` ADD CONSTRAINT `subsidiary_farmacia_id_fkey` FOREIGN KEY (`farmacia_id`) REFERENCES `pharmacy`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
