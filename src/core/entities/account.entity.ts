import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn({ name: 'accountId' })
  id: number;

  @Column({ name: 'accountDescription' })
  description: string;
}
