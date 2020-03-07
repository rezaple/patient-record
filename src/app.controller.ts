import { Controller, Body, Request, Post, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users/users.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
    constructor(
        private readonly usersService: UsersService,
        private readonly authService: AuthService
    ) {}

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Body() req) {
        return this.authService.login(req);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        return req;
    }

    @Post('users')
    async create(@Body() req) {
        return this.usersService.create(req);
    }
}