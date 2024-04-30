import { Test, TestingModule } from '@nestjs/testing';
import { CoursedetailsService } from './coursedetails.service';

describe('CoursedetailsService', () => {
  let service: CoursedetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursedetailsService],
    }).compile();

    service = module.get<CoursedetailsService>(CoursedetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
