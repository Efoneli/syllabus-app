import { Course } from 'src/courses/entities/course.entity';
import { AbstractEntity } from 'src/database/abstract.module';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Category extends AbstractEntity<Category> {

  @Column()
  name: string;

  @OneToMany(() => Course, (course) => course.category, { onDelete: 'CASCADE' })
  courses: Course[];
}
