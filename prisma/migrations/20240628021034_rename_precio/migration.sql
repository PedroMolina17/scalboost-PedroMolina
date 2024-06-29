/*
  Warnings:

  - You are about to drop the column `precio_url` on the `product` table. All the data in the column will be lost.
  - Added the required column `precio` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "precio_url",
ADD COLUMN     "precio" DECIMAL(10,2) NOT NULL;
