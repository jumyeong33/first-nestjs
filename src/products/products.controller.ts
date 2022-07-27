import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): object {
    const prodID = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: prodID };
  }

  @Get()
  getAllProducts(): any {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodID: string): any {
    return this.productsService.getProduct(prodID);
  }
}
