import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { Category } from './category.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn({ name: 'transId' })
  id: number;

  @Column({ name: 'transDescription' })
  description: string;

  @Column({ name: 'transDate' })
  date: Date;

  @Column({ name: 'transCategory' })
  categoryId: string;

  @Column({ name: 'transAmount' })
  amount: number;

  @Column({ name: 'cleared' })
  cleared: number;

  @Column({ name: 'account' })
  accountId: number;

  @ManyToOne(
    () => Category,
    category => category.transactions
  )
  @JoinColumn({ name: 'transCategory' })
  category: Category;
}
