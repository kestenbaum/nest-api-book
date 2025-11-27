import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwt: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findEmail(email);
    if (!user) throw new UnauthorizedException();

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) throw new UnauthorizedException();

    const payload = { sub: user.id, email: user.email };

    return { token: this.jwt.sign(payload) };
  }
}
