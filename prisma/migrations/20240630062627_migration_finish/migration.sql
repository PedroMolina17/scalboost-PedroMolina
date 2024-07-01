/*
  Warnings:

  - You are about to drop the column `description` on the `category` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "category_description_key";

-- DropIndex
DROP INDEX "product_description_key";

-- AlterTable
ALTER TABLE "category" DROP COLUMN "description",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "product_name_key" ON "product"("name");
