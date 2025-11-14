/*
  Warnings:

  - You are about to drop the `_pedidoprodutos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pedidos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_pedidoprodutos` DROP FOREIGN KEY `_PedidoProdutos_A_fkey`;

-- DropForeignKey
ALTER TABLE `_pedidoprodutos` DROP FOREIGN KEY `_PedidoProdutos_B_fkey`;

-- DropTable
DROP TABLE `_pedidoprodutos`;

-- DropTable
DROP TABLE `pedidos`;
