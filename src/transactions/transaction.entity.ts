import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn({ name: 'transId' })
  id: number;

  @Column({ name: 'transDescription' })
  description: string;

  @Column({ name: 'transDate' })
  date: Date;

  @Column()
  account: number;
}
