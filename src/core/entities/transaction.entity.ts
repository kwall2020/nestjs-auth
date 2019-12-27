import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn({ name: 'transId' })
  id: number;

  @Column({ name: 'transDescription' })
  description: string;

  @Column({ name: 'transDate' })
  date: Date;

  @Column({ name: 'transCategory' })
  category: string;

  @Column({ name: 'transAmount' })
  amount: number;

  @Column({ name: 'cleared' })
  isCleared: number;

  @Column({ name: 'account' })
  accountId: number;
}
