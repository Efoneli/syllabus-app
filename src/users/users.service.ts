import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  // async create(createUserDto: CreateUserDto) {
  //   const existingUser = await this.usersRepository.findOne({
  //     where: [{ email: createUserDto.email }, { sub: createUserDto.sub }],
  //   });

  //   if (existingUser) {
  //     throw new ConflictException('User already exists');
  //   }

  //   const user = this.usersRepository.create(createUserDto);
  //   await this.usersRepository.save(user);
  //   return user;
  // }


  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    user.name = updateUserDto.name ?? user.name;
    user.email = updateUserDto.email ?? user.email;
    user.sub = updateUserDto.sub ?? user.sub;
    user.isAdmin = updateUserDto.isAdmin ?? user.isAdmin;

    await this.usersRepository.save(user);
    return user;
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }
}
