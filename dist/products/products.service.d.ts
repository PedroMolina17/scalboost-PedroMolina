import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): Promise<{
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
    update(id: number, updateProductDto: UpdateProductDto): Promise<{
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
