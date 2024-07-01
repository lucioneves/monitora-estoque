import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { ProductsControllerTsController } from './products.controller.ts/products.controller.ts.controller';
import { ProductsService } from './products/products.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost',
      port: 5432,
      username: 'Kaio_Silva',
      password: '1234567',
      database: 'digiboard',
      autoLoadEntities: true,
      synchronize: true, // Sincroniza automaticamente as entidades com o banco de dados (para ambiente de desenvolvimento)
    }),
    UserModule,
    ProductModule,
  ],
  controllers: [AppController, ProductsControllerTsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
