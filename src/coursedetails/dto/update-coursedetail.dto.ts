import { PartialType } from '@nestjs/mapped-types';
import { CreateCoursedetailDto } from './create-coursedetail.dto';

export class UpdateCoursedetailDto extends PartialType(CreateCoursedetailDto) {}
