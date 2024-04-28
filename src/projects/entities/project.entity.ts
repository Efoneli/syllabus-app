import { AbstractEntity } from 'src/database/abstract.module';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Project extends AbstractEntity<Project> {

  @Column()
  title: string;

  @Column()
  description: string;

}
