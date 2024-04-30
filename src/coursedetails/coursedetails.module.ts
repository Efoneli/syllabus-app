import { Module } from '@nestjs/common';
import { CoursedetailsService } from './coursedetails.service';
import { CoursedetailsController } from './coursedetails.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coursedetail } from './entities/coursedetail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coursedetail])],
  controllers: [CoursedetailsController],
  providers: [CoursedetailsService],
})
export class CoursedetailsModule {}
