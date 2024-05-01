import { AbstractEntity } from 'src/database/abstract.module';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Coursedetail extends AbstractEntity<Coursedetail> {
 
  @Column()
  title: string;

  @Column()
  body: string;

 @Column()
  courseId: number;
}
