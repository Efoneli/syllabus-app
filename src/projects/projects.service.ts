import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectsRepository: Repository<Project>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    const project = new Project(createProjectDto);
    await this.entityManager.save(project);
    return "added successfully!"
  }

 
  findAll() {
    return this.projectsRepository.find();
  }

  findOne(id: number) {
    return this.projectsRepository.findOneBy({ id });
  }

 
  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const project = await this.projectsRepository.findOneBy({ id });
    project.description = updateProjectDto.description ?? project.description;
    project.title = updateProjectDto.title ?? project.title;

    this.entityManager.save(project);

    return project;
  }

  async remove(id: number) {
    await this.projectsRepository.delete(id);
    return "deleted successfully!"
  }
}
