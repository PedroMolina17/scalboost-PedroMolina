import { CreateProductDto } from './create-product.dto';
declare const UpdateProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    description?: string;
    name?: string;
    image_url?: string;
    cantidad?: number;
    precio_url?: number;
    fecha?: Date;
}
export {};
