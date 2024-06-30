import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    postImageDescription(file: Express.Multer.File, body: CreateProductDto): Promise<{
        id_product: number;
        description: string;
        image_url: string;
        cantidad: number;
        fecha: Date;
        precio: import("@prisma/client/runtime/library").Decimal;
        id_category: number | null;
    }>;
    findAll(): Promise<{
        id_product: number;
        description: string;
        image_url: string;
        cantidad: number;
        fecha: Date;
        precio: import("@prisma/client/runtime/library").Decimal;
        id_category: number | null;
    }[]>;
    findOne(id: number): Promise<{
        id_product: number;
        description: string;
        image_url: string;
        cantidad: number;
        fecha: Date;
        precio: import("@prisma/client/runtime/library").Decimal;
        id_category: number | null;
    }>;
    update(file: Express.Multer.File, id: number, body: UpdateProductDto): Promise<{
        id_product: number;
        description: string;
        image_url: string;
        cantidad: number;
        fecha: Date;
        precio: import("@prisma/client/runtime/library").Decimal;
        id_category: number | null;
    }>;
    remove(id: number): Promise<{
        id_product: number;
        description: string;
        image_url: string;
        cantidad: number;
        fecha: Date;
        precio: import("@prisma/client/runtime/library").Decimal;
        id_category: number | null;
    }>;
}
