import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  description: string;

  image_url: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  cantidad: number;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  precio: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  id_category: number;
}
