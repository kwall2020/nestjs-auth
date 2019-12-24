import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn({ name: 'categoryId' })
  id: number;

  @Column({ name: 'categoryDescription' })
  description: string;
}
