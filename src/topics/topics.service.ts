import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Topic } from './entities/topic.entity';

@Injectable()
export class TopicsService {
  constructor(
    @InjectRepository(Topic)
    private readonly topicsRepository: Repository<Topic>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createTopicDto: CreateTopicDto) {
    const topic = new Topic(createTopicDto);
    await this.entityManager.save(topic);
    return ' New Topic added';
  }

  findAll() {
    return this.topicsRepository.find();
  }

  findOne(id: number) {
    return this.topicsRepository.findOneBy({ id });
  }

  async update(id: number, updateTopicDto: UpdateTopicDto) {
    const topic = await this.topicsRepository.findOneBy({ id });
    topic.docsUrl = updateTopicDto.docsUrl ?? topic.docsUrl;
    topic.title = updateTopicDto.title ?? topic.title;
    topic.imageUrl = updateTopicDto.imageUrl ?? topic.imageUrl;
    topic.videoUrl = updateTopicDto.videoUrl ?? topic.videoUrl;
    topic.content = updateTopicDto.content ?? topic.content;

    this.entityManager.save(topic);

    return topic;
  }

  async remove(id: number) {
    await this.topicsRepository.delete(id);
  }
}
