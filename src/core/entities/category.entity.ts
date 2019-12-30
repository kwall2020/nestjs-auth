import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Transaction } from './transaction.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn({ name: 'categoryId' })
  id: number;

  @Column({ name: 'categoryDescription' })
  description: string;

  @OneToMany(
    () => Transaction,
    transaction => transaction.category
  )
  transactions: Transaction[];
}
