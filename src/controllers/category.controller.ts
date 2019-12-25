import { Controller } from '@nestjs/common';
import { CategoryService } from '../core/services/category.service';
import { Category } from '../core/entities/category.entity';
import { ControllerBase } from './controller-base.controller';

@Controller('category')
export class CategoryController extends ControllerBase<Category> {
  constructor(private readonly categoryService: CategoryService) {
    super(categoryService);
  }
}
