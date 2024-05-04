import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { ProjectsModule } from './projects/projects.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { TopicsModule } from './topics/topics.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CoursesModule,
    StudentsModule,
    ProjectsModule,
    DatabaseModule,
    CategoriesModule,
    TopicsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
