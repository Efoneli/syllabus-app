import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>,
    private readonly entityManager: EntityManager,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const category = new Category(createCategoryDto);
    await this.entityManager.save(category);
  }

  findAll() {
    return this.categoriesRepository.find();
  }

  async findOne(id: number) {
    const category = await this.categoriesRepository.findOne({
      where: { id },
      relations: { courses: true },
    });
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoriesRepository.findOneBy({ id });
    category.name = updateCategoryDto.name ?? category.name;

    this.entityManager.save(category);

    return category;
  }

  async remove(id: number) {
    await this.categoriesRepository.delete(id);
  }
}
