/*
  Warnings:

  - A unique constraint covering the columns `[description]` on the table `category` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "product" (
    "id_product" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "precio_url" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id_product")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_description_key" ON "product"("description");

-- CreateIndex
CREATE UNIQUE INDEX "product_image_url_key" ON "product"("image_url");

-- CreateIndex
CREATE UNIQUE INDEX "category_description_key" ON "category"("description");
