import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/courses/entities/course.entity';
import { User } from './entities/user.entity';
import { Feedback } from 'src/feedback/entities/feedback.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, User, Feedback])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
