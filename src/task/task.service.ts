import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from '../entity/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaveTaskDto } from './dto/save-task.dto';
import { retry } from 'rxjs';
import { ToggleTaskDto } from './dto/toggle-task.dto';
@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private taskRepo: Repository<Task>) {}

  async create(attrs: SaveTaskDto): Promise<Task> {
    const task = this.taskRepo.create(attrs);
    return await this.taskRepo.save(task);
  }

  async findAll() {
    const tasks = await this.taskRepo.find({});
    return tasks;
  }

  async findOneById(id: number): Promise<Task> {
    const task = await this.taskRepo.findOne(id);
    return task;
  }

  async updateOne(id: number, attrs: Partial<SaveTaskDto>): Promise<Task> {
    const task = await this.taskRepo.findOne(id);
    Object.assign(task, attrs);
    return await this.taskRepo.save(task);
  }

  async deleteAll() {
    const tasks = await this.taskRepo.find({});
    this.taskRepo.remove(tasks);
  }

  async deleteOneById(id: number) {
    const task = await this.taskRepo.findOne(id);
    this.taskRepo.remove(task);
    return task.id;
  }

  async toggleOne(id: number, attrs: ToggleTaskDto) {
    const task = await this.taskRepo.findOne(id);
    if (!task) {
      throw new NotFoundException('task not found');
    }
    Object.assign(task, attrs);
    return await this.taskRepo.save(task);
  }
}
