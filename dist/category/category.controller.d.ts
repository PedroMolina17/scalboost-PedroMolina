import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
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