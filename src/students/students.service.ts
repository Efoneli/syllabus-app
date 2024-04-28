import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentsRepository: Repository<Student>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const student = new Student(createStudentDto);
    await this.entityManager.save(student);
    return 'student added successfully!';
  }

  findAll() {
    return this.studentsRepository.find();
  }

  findOne(id: number) {
    return this.studentsRepository.findOneBy({ id });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = await this.studentsRepository.findOneBy({ id });
    student.name = updateStudentDto.name ?? student.name;

    this.entityManager.save(student);

    return student;
  }

  async remove(id: number) {
    await this.studentsRepository.delete(id);
    return 'student deleted successfully!';
  }
}
