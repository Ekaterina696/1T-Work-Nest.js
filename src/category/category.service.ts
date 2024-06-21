import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}

  create(categoryData: CreateCategoryDto) {
    return this.categoryRepository.save(categoryData);
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id: number) {
    return this.categoryRepository.findOneBy({id});
  }

  update(id: number, data: UpdateCategoryDto) {
    return this.categoryRepository.save({data, id});
  }

  remove(id: number) {
    return this.categoryRepository.delete(id);
  }
}
