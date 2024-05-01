import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { TasksModule } from './tasks/tasks.module';
import { StudentsModule } from './students/students.module';
import { ProjectsModule } from './projects/projects.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CoursedetailsModule } from './coursedetails/coursedetails.module';
import { CategoriesModule } from './categories/categories.module';
import { TopicsModule } from './topics/topics.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CoursesModule,
    TasksModule,
    StudentsModule,
    ProjectsModule,
    DatabaseModule,
    CoursedetailsModule,
    CategoriesModule,
    TopicsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
