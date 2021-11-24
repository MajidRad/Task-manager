import { IsString, IsNumber, IsEnum, IsBoolean } from 'class-validator';



export class SaveTaskDto {
  @IsString()
  title: string;

  @IsString()
  desc: string;

  @IsBoolean()
  status: boolean;
}
