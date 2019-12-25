import { CategoryController } from './category.controller';
import { TransactionController } from './transaction.controller';
import { AccountController } from './account.controller';

export const controllers: any[] = [
  CategoryController,
  TransactionController,
  AccountController
];

export * from './category.controller';
export * from './transaction.controller';
export * from './account.controller';
