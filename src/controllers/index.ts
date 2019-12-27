import { CategoryController } from './category.controller';
import { TransactionController } from './transaction.controller';
import { AccountController } from './account.controller';
import { CapturedController } from './captured.controller';
import { SettingController } from './setting.controller';
import { RecurrenceController } from './recurrence.controller';
import { BalanceController } from './balance.controller';

export const controllers: any[] = [
  CategoryController,
  TransactionController,
  AccountController,
  CapturedController,
  SettingController,
  RecurrenceController,
  BalanceController
];

export * from './category.controller';
export * from './transaction.controller';
export * from './account.controller';
export * from './category.controller';
export * from './setting.controller';
export * from './recurrence.controller';
export * from './balance.controller';
