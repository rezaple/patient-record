import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';;
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { AuthResolver } from './auth.resolver';
import { GqlAuthGuard } from './graph.auth.guard';

@Module({
  imports:[
    UsersModule, 
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3d' },
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, AuthResolver, GqlAuthGuard],
  exports: [AuthService],
})
export class AuthModule {}
