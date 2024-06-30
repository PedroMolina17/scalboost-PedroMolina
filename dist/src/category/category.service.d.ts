import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        id_category: number;
        description: string;
    }>;
    findAll(): Promise<{
        id_category: number;
        description: string;
    }[]>;
    findOne(id: number): Promise<{
        id_category: number;
        description: string;
    }>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<{
        id_category: number;
        description: string;
    }>;
    remove(id: number): Promise<{
        id_category: number;
        description: string;
    }>;
}
