import { Module } from '@nestjs/common';
import { TransactionService } from '../../core/services/transaction.service';
import { TransactionController } from '../../controllers/transaction.controller';
import { Transaction } from '../../core/entities/transaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])],
  providers: [TransactionService],
  controllers: [TransactionController]
})
export class TransactionModule {}
