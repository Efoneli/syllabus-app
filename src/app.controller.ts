import {
  Controller,
  Get,
  Inject,
  Req,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthorizationGuard } from './authorization/authorization.guard';
import { PermissionsGuard } from './authorization/permissions/permissions.guard';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/dog')
  async getDOg() {
    return this.appService.getDog();;
  }
  @UseGuards(AuthorizationGuard)
  @Get('/cat')
  getCat(): string {
    return this.appService.getCat();
  }
  @UseGuards(AuthorizationGuard)
  @Get('/sub')
  getSub(@Req() req): string {
    const userSub = req.user ? req.user.sub : 'Unknown User';
    return `SUB endpoint for user with sub: ${userSub}`;
  }
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['read:courses'])
  @Get('/admin')
  getAdmin(): string {
    return this.appService.getAdmin();
  }
}