import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly repository: Repository<Category>
  ) {}

  findOne(id: number): Promise<Category> {
    return this.repository.findOne(id);
  }

  find(): Promise<Category[]> {
    return this.repository.find();
  }
}
