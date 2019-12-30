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

  findWithTransactions(
    from: Date,
    to: Date,
    accountId: number
  ): Promise<Category[]> {
    return this.categoryRepository
      .createQueryBuilder('c')
      .select('c.superCategory', 'superCategory')
      .addSelect('c.description', 'description')
      .addSelect('SUM(COALESCE(t.amount, 0))', 'dollars')
      .leftJoin(
        'c.transactions',
        't',
        't.date BETWEEN :from AND :to AND t.accountId = :accountId',
        { from, to, accountId }
      )
      .groupBy('c.superCategory')
      .addGroupBy('c.description')
      .orderBy(
        'CASE superCategory WHEN "income" THEN 1 WHEN "debt" THEN 2 WHEN "giving" THEN 3 ELSE 4 END'
      )
      .getRawMany();
  }
}
