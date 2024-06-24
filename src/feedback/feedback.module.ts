import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { User } from 'src/users/entities/user.entity';
import { Feedback } from './entities/feedback.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User, Feedback ])],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
