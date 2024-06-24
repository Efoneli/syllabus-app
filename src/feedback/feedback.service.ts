// import { Injectable } from '@nestjs/common';
// import { CreateFeedbackDto } from './dto/create-feedback.dto';
// import { UpdateFeedbackDto } from './dto/update-feedback.dto';

// @Injectable()
// export class FeedbackService {
//   create(createFeedbackDto: CreateFeedbackDto) {
//     return 'This action adds a new feedback';
//   }

//   findAll() {
//     return `This action returns all feedback`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} feedback`;
//   }

//   update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
//     return `This action updates a #${id} feedback`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} feedback`;
//   }
// }



import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { Feedback } from './entities/feedback.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private readonly feedbackRepository: Repository<Feedback>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createFeedbackDto: CreateFeedbackDto) {
    const feedback = new Feedback(createFeedbackDto)
    await this.entityManager.save(feedback)
    return ' New feedback added';
  }


  findAll() {
    return this.feedbackRepository.find();
  }

  findOne(id: number) {
    return this.feedbackRepository.findOneBy({ id });
  }

  async update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
    const feedback = await this.feedbackRepository.findOneBy({ id });
    feedback.email = updateFeedbackDto.email ?? feedback.email;
    feedback.feedback = updateFeedbackDto.feedback ?? feedback.feedback;
    feedback.courseId = updateFeedbackDto.courseId ?? feedback.courseId;

    this.entityManager.save(feedback);

    return feedback;
  }

 async remove(id: number) {
    await this.feedbackRepository.delete(id);
    return `This action removes a #${id} feedback`;
  }

  // New method to find completed courses by user email
  async findCompletedCoursesByEmail(email: string): Promise<number[]> {
    const feedbacks = await this.feedbackRepository.find({
      where: { email: email },
    });
    return feedbacks.map(feedback => feedback.courseId);
  }

}
