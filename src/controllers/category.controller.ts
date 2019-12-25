import { Controller, Get, UseGuards, Param } from '@nestjs/common';
import { CategoryService } from '../core/services/category.service';
import { Category } from '../core/entities/category.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  find(): Promise<Category[]> {
    return this.categoryService.find();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findOne(+id);
  }
}
