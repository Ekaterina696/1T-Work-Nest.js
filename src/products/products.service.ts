import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  create(productsData: CreateProductDto) {
    return this.productsRepository.save(productsData);
  }

  findAll() {
    return this.productsRepository.find();
  }

  findOne(id: number) {
    return this.productsRepository.findOneBy({ id });
  }

  update(id: number, productsData: UpdateProductDto) {
    return this.productsRepository.save({ productsData, id });
  }

  remove(id: number) {
    return this.productsRepository.delete(id);
  }
}
