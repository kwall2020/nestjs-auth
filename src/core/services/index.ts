import { CategoryService } from './category.service';
import { TransactionService } from './transaction.service';
import { AccountService } from './account.service';

export const services: any[] = [
  CategoryService,
  TransactionService,
  AccountService
];

export * from './category.service';
export * from './transaction.service';
export * from './account.service';
