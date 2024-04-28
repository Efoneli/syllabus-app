import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createCourseDto: CreateCourseDto) {
    const course = new Course(createCourseDto)
    await this.entityManager.save(course)
    return ' New course added';
  }

  findAll() {
    return this.coursesRepository.find();
  }

  findOne(id: number) {
    return this.coursesRepository.findOneBy({ id });
  }


  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const course = await this.coursesRepository.findOneBy({ id });
    course.description = updateCourseDto.description ?? course.description;
    course.title = updateCourseDto.title ?? course.title;
    course.prerequisites = updateCourseDto.prerequisites ?? course.prerequisites;

    this.entityManager.save(course);

    return course;
  }

  async remove(id: number) {
    await this.coursesRepository.delete(id);
  }
}
