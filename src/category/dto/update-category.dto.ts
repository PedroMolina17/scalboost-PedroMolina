import { IsString, IsNotEmpty } from 'class-validator';
export class UpdateCategoryDto {
  @IsString()
  @IsNotEmpty()
  description: string;
}
