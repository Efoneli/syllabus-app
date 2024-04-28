

import { AbstractEntity } from 'src/database/abstract.module';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Student extends AbstractEntity<Student> {

  @Column()
  name: string;

  @Column()
  password: string;

}
