import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async register(data: CreateUserDto) {
    const saltOrRounds = 10;
    data.password = await bcrypt.hash(data.password, saltOrRounds);
    return this.usersRepository.save(data);
  }

  async login(data: CreateUserDto) {
    const user = await this.usersRepository.findOneBy({ email: data.email });
    if (!user) {
      return false;
    }

    return await bcrypt.compare(data.password, user.password);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(email: string) {
    return this.usersRepository.findOneBy({email});
  }

  // findOneByEmail(email: string) {
  //   return this.usersRepository.findOneBy({ email });
  // }

  update(id: number, data: UpdateUserDto) {
    return this.usersRepository.save({ ...data, id });
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }
}
