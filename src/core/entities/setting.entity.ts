import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Setting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  account: number;

  @Column({ name: 'settingName' })
  name: string;

  @Column({ name: 'decimalValue' })
  value: number;
}
