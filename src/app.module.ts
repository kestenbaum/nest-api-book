import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/entities/book.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: '',
      entities: [Book, User],
      migrations: [`src/**/migrations/*.ts`],
      synchronize: true,
      logging: true,
    }),
    BooksModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
