import { Test, TestingModule } from '@nestjs/testing';
import { CoursedetailsController } from './coursedetails.controller';
import { CoursedetailsService } from './coursedetails.service';

describe('CoursedetailsController', () => {
  let controller: CoursedetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursedetailsController],
      providers: [CoursedetailsService],
    }).compile();

    controller = module.get<CoursedetailsController>(CoursedetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
