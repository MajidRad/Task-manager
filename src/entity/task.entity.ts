import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
export enum TaskStatus {
  Created = 0,
  InProgress = 1,
  Done = 2,
}


@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column()
  status: TaskStatus;
}
