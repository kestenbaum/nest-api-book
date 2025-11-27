import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { id: id } });
  }

  async findEmail(email: string) {
    return this.userRepository.findOne({
      where: { email: email },
      select: ['id', 'username', 'email'],
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    const existingUser = this.userRepository.findOne({
      where: { id: id },
    });
    const updatedUser = Object.assign(existingUser, updateUserDto);
    return this.userRepository.save(updatedUser);
  }

  async remove(id: string) {
    return this.userRepository.delete(id);
  }
}
