import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(userData: Partial<CreateUserDto>): Promise<User> {
    if (!userData.password) {
      throw new Error('Password is required.');
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(userData.password, salt);

    const user = this.userRepository.create({
      ...userData,
      passwordHash: hashed,
    });

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

  update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    const existingUser = this.userRepository.findOne({
      where: { id: id },
    });
    const updatedUser = Object.assign(existingUser, updateUserDto);
    return this.userRepository.save(updatedUser);
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
