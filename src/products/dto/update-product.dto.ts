import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import {
  IsDate,
  IsDecimal,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  @MinLength(2)
  @IsOptional()
  description?: string;

  @IsOptional()
  @IsString()
  name?: string;

  image_url?: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  cantidad?: number;

  @IsDecimal()
  @IsOptional()
  @Type(() => Number)
  precio_url?: number;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  fecha?: Date;
}
