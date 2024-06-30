"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const image_description_helper_1 = require("./helper/image-description.helper");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async postImageDescription(file, body) {
        try {
            if (!file) {
                throw new common_1.BadRequestException('File is missing');
            }
            const filePath = `/images/image-cover/${file.filename}`;
            const createProductDto = {
                ...body,
                image_url: filePath,
            };
            return await this.productsService.create(createProductDto);
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.BadRequestException('The name already exists');
            }
            else if (error.code === 'P2003') {
                throw new common_1.NotFoundException(`The id_category ${body.id_category} does not exist`);
            }
            throw error.code;
        }
    }
    async findAll() {
        return await this.productsService.findAll();
    }
    async findOne(id) {
        try {
            const product = await this.productsService.findOne(id);
            if (!product) {
                throw new common_1.NotFoundException(`The product with id: ${id} does not exist`);
            }
            return product;
        }
        catch (error) {
            throw error;
        }
    }
    async update(file, id, body) {
        try {
            if (!file) {
                throw new common_1.BadRequestException('File is missing');
            }
            const filePath = `/images/image-cover/${file.filename}`;
            const updateProductDto = {
                ...body,
                image_url: filePath,
            };
            return await this.productsService.update(id, updateProductDto);
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.BadRequestException('The name already exists');
            }
            else if (error.code === 'P2003') {
                throw new common_1.NotFoundException(`The id_category ${body.id_category} does not exist`);
            }
            else if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`The product with id:${id} does not exist`);
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            return await this.productsService.remove(id);
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`The product with id: ${id} does not exist`);
            }
            throw error;
        }
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image_url', {
        storage: (0, multer_1.diskStorage)({
            destination: './public/images/image-cover',
            filename: image_description_helper_1.renameImage,
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "postImageDescription", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image_url', {
        storage: (0, multer_1.diskStorage)({
            destination: './public/images/image-cover',
            filename: image_description_helper_1.renameImage,
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "remove", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map