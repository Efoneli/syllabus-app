import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    const task   = new Task(createTaskDto);
    await this.entityManager.save(task);
    return "task added successfully"
  }

  findAll() {
    return this.tasksRepository.find();
  }

  findOne(id: number) {
    return this.tasksRepository.findOneBy({ id });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.tasksRepository.findOneBy({ id });
    task.description = updateTaskDto.description ?? task.description;
    task.title = updateTaskDto.title ?? task.title;

    this.entityManager.save(task);

    return task;
  }

  async remove(id: number) {
    await this.tasksRepository.delete(id);
    return "task deleted succefully!"
  }
}
