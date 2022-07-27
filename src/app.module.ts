import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';

@Module({
  imports: [ProductModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
