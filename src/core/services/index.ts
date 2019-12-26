import { CategoryService } from './category.service';
import { TransactionService } from './transaction.service';
import { AccountService } from './account.service';
import { CapturedService } from './captured.service';
import { SettingService } from './setting.service';
import { RecurrenceService } from './recurrence.service';

export const services: any[] = [
  CategoryService,
  TransactionService,
  AccountService,
  CapturedService,
  SettingService,
  RecurrenceService
];

export * from './category.service';
export * from './transaction.service';
export * from './account.service';
export * from './captured.service';
export * from './setting.service';
export * from './recurrence.service';
