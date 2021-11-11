import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import * as ormconfig from './ormconfig';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [TaskModule, TypeOrmModule.forRoot(ormconfig)],
  controllers: [AppController],
  providers: [AppService, { provide: APP_PIPE, useClass: ValidationPipe }],
})
export class AppModule {}
