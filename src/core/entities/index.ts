import { Category } from './category.entity';
import { Transaction } from './transaction.entity';
import { Account } from './account.entity';
import { Captured } from './captured.entity';
import { Setting } from './setting.entity';

export const entities: any[] = [
  Category,
  Transaction,
  Account,
  Captured,
  Setting
];

export * from './category.entity';
export * from './transaction.entity';
export * from './account.entity';
export * from './category.entity';
export * from './setting.entity';
