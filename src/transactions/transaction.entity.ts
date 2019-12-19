import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn({ name: 'transId' })
  id: number;

  @Column({ name: 'transDescription' })
  description: string;
}
