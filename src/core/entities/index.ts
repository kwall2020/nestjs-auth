import { Category } from './category.entity';
import { Transaction } from './transaction.entity';
import { Account } from './account.entity';

export const entities: any[] = [Category, Transaction, Account];

export * from './category.entity';
export * from './transaction.entity';
export * from './account.entity';
