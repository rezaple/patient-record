import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import Authenticate from '../utils/Authenticate';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: typeof User) {}

  async findOne(email: string): Promise<User> {
    return await this.usersRepository.findOne<User>({
        where: { email },
    });
  }

  //validate unique email
  async create({name, email, password}): Promise<any> {
    const user = await this.findOne(email);
    if(!user){
      const hashPass = await Authenticate.hashPassword(password);
      return await this.usersRepository.create({
        name,
        email,
        password: hashPass
      });
    }
    return null;
    
  }
}