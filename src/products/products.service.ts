import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number): string {
    const prodID = new Date().toString();
    const newProduct = new Product(prodID, title, desc, price);
    this.products.push(newProduct);
    return prodID;
  }

  getProducts() {
    return [...this.products];
  }

  getProduct(prodID: string): any {
    const result = this.products.find((v) => v.id === prodID);
    if (!result) {
      throw new NotFoundException('Does not exist Product');
    }
    return result;
  }
}
