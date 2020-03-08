/* eslint-disable @typescript-eslint/camelcase */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import Authenticate from '../utils/Authenticate';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from '../users/dto/user.dto';
import { UserRO } from '../users/dto/user.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ){}

    async validateUser(data: UserDTO){
        const { email, password } = data;
        const user = await this.usersService.findOne(email);
        const passwordInput = password;

        if (!user || !(await Authenticate.comparePassword(passwordInput, user.password))) {
            throw new UnauthorizedException();
        }

        const responseObject: UserRO = {
            id: user.id,
            createdAt: user.createdAt,
            email: user.email,
          };
      
        responseObject.token = this.jwtService.sign({
            id: user.id,
            email: user.email,
        });
        return responseObject;
    }

    async login(user: any) {
        const payload = { username: user.email};
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
