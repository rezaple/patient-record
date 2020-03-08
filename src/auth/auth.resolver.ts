import {
  Resolver,
  Args,
  Mutation
} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserDTO, UserRO } from '../users/dto/user.dto';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService
  ) {}

  @Mutation(()=>UserRO)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const user: UserDTO = { email, password };
    return await this.authService.validateUser(user);
  }
}
