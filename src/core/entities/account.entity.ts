import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn({ name: 'AccountId' })
  id: number;

  @Column({ name: 'AccountDescription' })
  description: string;
}
