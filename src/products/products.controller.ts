import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
  BadRequestException,
  UploadedFile,
  UseInterceptors,
  NotFoundException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { renameImage } from './helper/image-description.helper';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image_url', {
      storage: diskStorage({
        destination: './public/images/image-cover',
        filename: renameImage,
      }),
    }),
  )
  async postImageDescription(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateProductDto,
  ) {
    try {
      if (!file) {
        throw new BadRequestException('File is missing');
      }

      const filePath = `/images/image-cover/${file.filename}`;
      const createProductDto: CreateProductDto = {
        ...body,
        image_url: filePath,
      };
      return await this.productsService.create(createProductDto);
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('The name already exists');
      } else if (error.code === 'P2003') {
        throw new NotFoundException(
          `The id_category ${body.id_category} does not exist`,
        );
      }
      throw error;
    }
  }

  @Get()
  async findAll() {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      const product = await this.productsService.findOne(id);
      if (!product) {
        throw new NotFoundException(
          `The product with id: ${id} does not exist`,
        );
      }
      return product;
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  @UseInterceptors(
    FileInterceptor('image_url', {
      storage: diskStorage({
        destination: './public/images/image-cover',
        filename: renameImage,
      }),
    }),
  )
  async update(
    @UploadedFile() file: Express.Multer.File,
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProductDto,
  ) {
    try {
      const filePath = file ? `/images/image-cover/${file.filename}` : null;
      const updateProductDto: UpdateProductDto = {
        ...body,
        ...(filePath && { image_url: filePath }),
      };
      return await this.productsService.update(id, updateProductDto);
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('The name already exists');
      } else if (error.code === 'P2003') {
        throw new NotFoundException(
          `The id_category ${body.id_category} does not exist`,
        );
      } else if (error.code === 'P2025') {
        throw new NotFoundException(`The product with id:${id} does not exist`);
      }
      throw error;
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.productsService.remove(id);
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(
          `The product with id: ${id} does not exist`,
        );
      }
      throw error;
    }
  }
}
