import { IsBoolean } from 'class-validator';

export class ToggleTaskDto {
  @IsBoolean()
  status: boolean;
}
