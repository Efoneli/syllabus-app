import { AbstractEntity } from 'src/database/abstract.module';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Task extends AbstractEntity<Task> {

  @Column()
  title: string;

  @Column()
  description: string;

  

}
