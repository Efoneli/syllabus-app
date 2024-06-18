import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  sub: string;

  @Column()
  name: string;

  @Column({ default: false })
  isAdmin: boolean;
}
