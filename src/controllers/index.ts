import { CategoryController } from './category.controller';
import { TransactionController } from './transaction.controller';
import { AccountController } from './account.controller';
import { CapturedController } from './captured.controller';
import { SettingController } from './setting.controller';

export const controllers: any[] = [
  CategoryController,
  TransactionController,
  AccountController,
  CapturedController,
  SettingController
];

export * from './category.controller';
export * from './transaction.controller';
export * from './account.controller';
export * from './category.controller';
export * from './setting.controller';
