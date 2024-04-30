import { Injectable } from '@nestjs/common';
import { CreateCoursedetailDto } from './dto/create-coursedetail.dto';
import { UpdateCoursedetailDto } from './dto/update-coursedetail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Coursedetail } from './entities/coursedetail.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class CoursedetailsService {
  constructor(
    @InjectRepository(Coursedetail)
    private readonly coursesdetailRepository: Repository<Coursedetail>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createCoursedetailDto: CreateCoursedetailDto) {
    const coursedetail = new Coursedetail(createCoursedetailDto)
    await this.entityManager.save(coursedetail)
    return ' New course added';
  }
  findAll() {
    return this.coursesdetailRepository.find();
  }

  findOne(id: number) {
    return this.coursesdetailRepository.findOneBy({ id });
  }

  async update(id: number, updateCoursedetailDto: UpdateCoursedetailDto) {
    const coursedetail = await this.coursesdetailRepository.findOneBy({ id });
    coursedetail.title = updateCoursedetailDto.title ?? coursedetail.title;
    coursedetail.body = updateCoursedetailDto.body ?? coursedetail.body;

    this.entityManager.save(coursedetail);

    return coursedetail;
  }

  async remove(id: number) {
    await this.coursesdetailRepository.delete(id);
  }
}
