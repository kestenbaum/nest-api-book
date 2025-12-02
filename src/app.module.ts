import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/entities/book.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
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
