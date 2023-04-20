import { Injectable, NotFoundException } from '@nestjs/common';
import { RegisterUserDto } from '../dto/register-user.dto';
import { UserDto } from '../dto/user.dto';
import { UserModel } from '../models/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserMapper } from '../mappers/user.mapper';
import { saltOrRounds } from '../users.config';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserModel)
    private usersRepository: Repository<UserModel>
  ) {}

  async registerUser(dto: RegisterUserDto): Promise<UserDto> {
    const password = dto.password;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const model = UserMapper.mapRegisterDtoToModel(dto, hashedPassword);
    const savedModel = await this.usersRepository.save(model);
    return UserMapper.mapToDto(savedModel);
  }

  async getUserById(id: string): Promise<UserDto> {
    const foundModel = await this.usersRepository.findOneBy({ id });
    if (!foundModel) {
      throw new NotFoundException();
    }
    return UserMapper.mapToDto(foundModel);
  }

  async getUserByEmail(email: string): Promise<UserDto> {
    const foundModel = await this.usersRepository.findOneBy({ email });
    if (!foundModel) {
      throw new NotFoundException();
    }
    return UserMapper.mapToDto(foundModel);
  }

  async getUsers(): Promise<UserDto[]> {
    const foundModels = await this.usersRepository.find();
    if (!foundModels) {
      return [];
    }
    return foundModels.map((model) => UserMapper.mapToDto(model));
  }
}
