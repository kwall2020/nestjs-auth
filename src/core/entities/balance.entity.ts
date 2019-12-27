import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Balance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'balanceDate' })
  date: Date;

  @Column({ name: 'balanceAmount' })
  amount: number;
}
