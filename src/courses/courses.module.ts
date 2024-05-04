import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Topic } from 'src/topics/entities/topic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Topic])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
