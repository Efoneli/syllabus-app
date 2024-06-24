import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.module';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Feedback extends AbstractEntity<Feedback> {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  feedback: string;

  @Column()
  courseId: number;

  @ManyToOne(() => User, (user) => user.feedback, { onDelete: 'CASCADE' })
  user: User;
}
