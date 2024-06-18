import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler()) || [];
    if (!requiredRoles.length) return true;

    const { user } = context.switchToHttp().getRequest();
    const userRoles = user.roles || [];

    const hasRole = requiredRoles.every(role => userRoles.includes(role));
    if (hasRole) return true;

    throw new ForbiddenException('Insufficient roles to access service');
  }
}
