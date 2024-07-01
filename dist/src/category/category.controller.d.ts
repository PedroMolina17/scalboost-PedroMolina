import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        id_category: number;
        name: string;
    }>;
    findAll(): Promise<{
        id_category: number;
        name: string;
    }[]>;
    findOne(id: number): Promise<{
        id_category: number;
        name: string;
    }>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<{
        id_category: number;
        name: string;
    }>;
    remove(id: number): Promise<{
        id_category: number;
        name: string;
    }>;
}
