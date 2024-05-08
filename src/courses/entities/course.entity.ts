import { Category } from 'src/categories/entities/category.entity';
import { AbstractEntity } from 'src/database/abstract.module';
import { Topic } from 'src/topics/entities/topic.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Course extends AbstractEntity<Course> {
 
  @Column()
  title: string;

  @Column()
    categoryId: number;

  @Column()
  description: string;

  @Column()
  prerequisites: string;

  @Column({nullable: true})
  imageUrl: string;

  @ManyToOne(() => Category, category => category.courses)
  @JoinColumn()
  category: Category; 
  

  @OneToMany(() => Topic, (topic) => topic.course, { onDelete: 'CASCADE' })
  topics: Topic[];
  
}
