/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import Authenticate from '../utils/Authenticate';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ){}

    async validateUser(email: string, password: string):Promise<any>{
        const user = await this.usersService.findOne(email);
        const passwordInput = password;
        if(user){
            const isAuthenticate: boolean = await  Authenticate.comparePassword(passwordInput, user.password);
            if(isAuthenticate){
                const {password, ...result} = user;
                return result;
            }
        }

        return false;
    }

    async login(user: any) {
        const payload = { username: user.email};
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
