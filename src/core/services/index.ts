import { CategoryService } from './category.service';
import { TransactionService } from './transaction.service';

export const services: any[] = [CategoryService, TransactionService];

export * from './category.service';
export * from './transaction.service';
