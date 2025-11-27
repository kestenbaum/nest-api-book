import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly typeOrmRepo: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const book = this.typeOrmRepo.create(createBookDto);
    return this.typeOrmRepo.save(book);
  }

  async findAll(): Promise<CreateBookDto[]> {
    return this.typeOrmRepo.find();
  }

  async findOne(id: string): Promise<CreateBookDto | null> {
    return this.typeOrmRepo.findOneBy({ id });
  }

  async update(
    id: string,
    updateBookDto: UpdateBookDto,
  ): Promise<UpdateBookDto | null> {
    const existingUser = await this.typeOrmRepo.findOne({
      where: { id: id },
    });

    if (!existingUser) {
      return null;
    }

    const bookId = { id: id };
    const updatedBook = Object.assign(bookId, updateBookDto);
    return await this.typeOrmRepo.save(updatedBook);
  }

  async remove(id: string) {
    return this.typeOrmRepo.delete(id);
  }
}
