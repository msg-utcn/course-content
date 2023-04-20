import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersApiRoute } from '../users.config';
import { UserDto } from '../dto/user.dto';
import { UsersService } from '../services/users.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
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
}