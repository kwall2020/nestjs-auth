import { CategoryService } from './category.service';
import { TransactionService } from './transaction.service';
import { AccountService } from './account.service';
import { CapturedService } from './captured.service';

export const services: any[] = [
  CategoryService,
  TransactionService,
  AccountService,
  CapturedService
];

export * from './category.service';
export * from './transaction.service';
export * from './account.service';
export * from './captured.service';
