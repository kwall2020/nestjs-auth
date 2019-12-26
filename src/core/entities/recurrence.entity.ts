import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'recurrenceNew' })
export class Recurrence {
  @PrimaryGeneratedColumn({ name: 'recurrenceId' })
  id: number;

  @Column({ name: 'recurrenceDescription' })
  description: string;
}
