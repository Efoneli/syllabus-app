import { Course } from 'src/courses/entities/course.entity';
import { AbstractEntity } from 'src/database/abstract.module';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Topic extends AbstractEntity<Topic> {
 
  @Column()
  title: string;

  @Column()
    courseId: number;

  @Column()
  content: string;

  @Column()
  imageUrl: string;

  @Column()
  docsUrl: string;

  @Column()
  videoUrl: string;

//   @OneToMany(() => Course, (course) => course.topic, { onDelete: 'CASCADE' })
//   courses: Course[];

  @ManyToOne(() => Course, course => course.topics)
  @JoinColumn()
  course: Course;
}
