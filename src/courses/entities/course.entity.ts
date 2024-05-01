import { Category } from 'src/categories/entities/category.entity';
import { AbstractEntity } from 'src/database/abstract.module';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

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

  @ManyToOne(() => Category, category => category.courses)
  @JoinColumn()
  category: Category;
}
