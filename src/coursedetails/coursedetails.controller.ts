import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursedetailsService } from './coursedetails.service';
import { CreateCoursedetailDto } from './dto/create-coursedetail.dto';
import { UpdateCoursedetailDto } from './dto/update-coursedetail.dto';

@Controller('coursedetails')
export class CoursedetailsController {
  constructor(private readonly coursedetailsService: CoursedetailsService) {}

  @Post()
  create(@Body() createCoursedetailDto: CreateCoursedetailDto) {
    return this.coursedetailsService.create(createCoursedetailDto);
  }

  @Get()
  findAll() {
    return this.coursedetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursedetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoursedetailDto: UpdateCoursedetailDto) {
    return this.coursedetailsService.update(+id, updateCoursedetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursedetailsService.remove(+id);
  }
}
