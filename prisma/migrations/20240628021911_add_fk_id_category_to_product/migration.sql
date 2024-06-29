-- AlterTable
ALTER TABLE "product" ADD COLUMN     "id_category" INTEGER;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "category"("id_category") ON DELETE SET NULL ON UPDATE CASCADE;
