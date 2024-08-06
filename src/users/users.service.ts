// import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { User } from './entities/user.entity';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectRepository(User)
//     private readonly usersRepository: Repository<User>,
//   ) {}

//   // async create(createUserDto: CreateUserDto) {
//   //   const existingUser = await this.usersRepository.findOne({
//   //     where: [{ email: createUserDto.email }, { sub: createUserDto.sub }],
//   //   });

//   //   if (existingUser) {
//   //     throw new ConflictException('User already exists');
//   //   }

//   //   const user = this.usersRepository.create(createUserDto);
//   //   await this.usersRepository.save(user);
//   //   return user;
//   // }


//   async findByEmail(email: string) {
//     return this.usersRepository.find(user => user.email === email);
//   }

//   async create(createUserDto: CreateUserDto) {
//     const newUser = { id: Date.now(), ...createUserDto };
//     this.usersRepository.push(newUser);
//     return newUser;
//   }

//   // async create(createUserDto: CreateUserDto): Promise<User> {
//   //   const user = this.usersRepository.create(createUserDto);
//   //   return this.usersRepository.save(user);
//   // }

//   findAll() {
//     return this.usersRepository.find();
//   }

//   findOne(id: number) {
//     return this.usersRepository.findOneBy({ id });
//   }

//   async update(id: number, updateUserDto: UpdateUserDto) {
//     const user = await this.usersRepository.findOneBy({ id });
//     if (!user) {
//       throw new NotFoundException('User not found');
//     }
//     user.name = updateUserDto.name ?? user.name;
//     user.email = updateUserDto.email ?? user.email;
//     user.sub = updateUserDto.sub ?? user.sub;
//     user.isAdmin = updateUserDto.isAdmin ?? user.isAdmin;

//     await this.usersRepository.save(user);
//     return user;
//   }

//   async remove(id: number) {
//     await this.usersRepository.delete(id);
//   }
// }









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

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    // Check if a user with the same email or sub already exists
    const existingUser = await this.findByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    // Create a new user entity
    const user = this.usersRepository.create(createUserDto);

    // Save the new user entity
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
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

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
