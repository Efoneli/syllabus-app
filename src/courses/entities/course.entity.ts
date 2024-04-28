import { AbstractEntity } from 'src/database/abstract.module';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Course extends AbstractEntity<Course> {
 
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  prerequisites: string;
}
