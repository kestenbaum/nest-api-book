import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 25, nullable: false })
  title: string;

  @Column({ length: 25, nullable: false, unique: true })
  author: string;

  @Column()
  publishedYear: Date;
}
