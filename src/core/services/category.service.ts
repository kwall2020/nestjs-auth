import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';
import { ServiceBase } from './service-base.service';

@Injectable()
export class CategoryService extends ServiceBase<Category> {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {
    super(categoryRepository);
  }
}
