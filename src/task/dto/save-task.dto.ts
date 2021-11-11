import { IsString, IsNumber, IsEnum } from 'class-validator';

import { TaskStatus } from '../../entity/task.entity';

export class SaveTaskDto {
  @IsString()
  title: string;

  @IsString()
  desc: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;
}
