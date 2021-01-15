import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return `This action adds a new user with 
    ${JSON.stringify(createUserDto)} fields`;
  }

  findAll(limit: number, offset: number) {
    return `This action returns all users with pagination limit: ${limit}, offset: ${offset}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user, with ${JSON.stringify(
      updateUserDto,
    )} fields`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
