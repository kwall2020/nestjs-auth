import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Captured {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;
}
