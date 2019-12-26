import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'recurrenceNew' })
export class Recurrence {
  @PrimaryGeneratedColumn({ name: 'recurrenceId' })
  id: number;

  @Column({ name: 'recurrenceDescription' })
  description: string;

  @Column({ name: 'recurrenceCategory' })
  category: string;

  @Column({ name: 'recurrenceAmount' })
  amount: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  weeklyFrequency: number;

  @Column()
  weeklyDay: string;

  @Column()
  monthlyFrequency: number;

  @Column()
  monthlyDate: number;
}
