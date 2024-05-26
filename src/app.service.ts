import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getDog(): string {
    return 'WOOF! WOOF!!';
  }
  getCat(): string {
    return 'MEOW stay away!';
  }
  getAdmin(): string {
    return 'I am admin!';
  }
}