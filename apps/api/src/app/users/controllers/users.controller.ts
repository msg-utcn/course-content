import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersApiRoute } from '../users.config';
import { UserDto } from '../dto/user.dto';
import { UsersService } from '../services/users.service';
import { RegisterUserDto } from '../dto/register-user.dto';

@ApiTags(UsersApiRoute)
@Controller(UsersApiRoute)
export class UsersController {
    constructor(private usersService: UsersService) {}
    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<UserDto> {
        return this.usersService.getUserById(id);
    }

    @Get()
    async getUsers(): Promise<UserDto[]> {
        return this.usersService.getUsers();
    }

    @Post()
    async registerUser(@Body() dto: RegisterUserDto): Promise<UserDto> {
        return this.usersService.registerUser(dto);
    }
}
