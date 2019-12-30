import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Category } from '../core/entities/category.entity';
import { CategoryService } from '../core/services/category.service';

import { ControllerBase } from './controller-base.controller';

@Controller('category')
export class CategoryController extends ControllerBase<Category> {
  constructor(protected readonly categoryService: CategoryService) {
    super(categoryService);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findByQuery(@Query() query: any): Promise<Category[]> {
    if (query.from) {
      return this.categoryService.findWithTransactions(
        query.from,
        query.to,
        query.accountId
      );
    } else {
      return this.categoryService.find();
    }
  }
}
