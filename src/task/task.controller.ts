import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SaveTaskDto } from './dto/save-task.dto';
import { ToggleTaskDto } from './dto/toggle-task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private tasksService: TaskService) {}

  @Post()
  async addTask(@Body() body: SaveTaskDto) {
    console.log(body);
    const task = await this.tasksService.create(body);
    return task;
  }

  @Patch('/:id')
  async updateTask(@Param('id') id: string, @Body() body: SaveTaskDto) {
    const task = await this.tasksService.updateOne(parseInt(id), body);
    return task;
  }

  @Get()
  findAllTask() {
    const tasks = this.tasksService.findAll();
    return tasks;
  }

  @Get('/:id')
  findOneTask(@Param('id') id: string) {
    const task = this.tasksService.findOneById(parseInt(id));
    return task;
  }

  @Delete()
  deleteAllTask() {
    this.tasksService.deleteAll();
    return 'all task deleted successfully';
  }

  @Delete('/:id')
  deleteOneTask(@Param('id') id: string) {
    const task = this.tasksService.deleteOneById(parseInt(id));
    return task;
  }

  @Patch('/toggle/:id')
  toggleTask(@Param('id') id: string, @Body() body: ToggleTaskDto) {
    const task = this.tasksService.toggleOne(parseInt(id), body);
    return task;
  }
}
