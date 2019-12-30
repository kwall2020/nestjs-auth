import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from '../entities/category.entity';

import { ServiceBase } from './service-base.service';

@Injectable()
export class CategoryService extends ServiceBase<Category> {
  constructor(
    @InjectRepository(Category)
    protected readonly categoryRepository: Repository<Category>
  ) {
    super(categoryRepository);
  }

  findByTransactionDateRange(
    from: Date,
    to: Date,
    accountId: number
  ): Promise<Category[]> {
    return this.categoryRepository
      .createQueryBuilder('c')
      .leftJoinAndSelect('c.transactions', 't')
      .where('t.date BETWEEN :from AND :to', { from, to })
      .andWhere('t.accountId = :accountId', { accountId })
      .getMany();
  }
}
