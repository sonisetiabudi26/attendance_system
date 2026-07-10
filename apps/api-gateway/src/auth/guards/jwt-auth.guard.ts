import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { Reflector } from '@nestjs/core';

import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtAuthGuard
  implements CanActivate
{
  constructor(
    private readonly reflector: Reflector,

    private readonly authService: AuthService,
  ) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    /**
     * Skip endpoint public
     */
    const isPublic =
      this.reflector.getAllAndOverride<boolean>(
        IS_PUBLIC_KEY,
        [
          context.getHandler(),
          context.getClass(),
        ],
      );

    if (isPublic) {
      return true;
    }

    const request =
      context.switchToHttp().getRequest();

    const authHeader =
      request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException(
        'Missing Authorization header',
      );
    }

    const [type, token] =
      authHeader.split(' ');

    if (
      type !== 'Bearer' ||
      !token
    ) {
      throw new UnauthorizedException(
        'Invalid Authorization header',
      );
    }

    const payload =
      await this.authService.verifyAccessToken(
        token,
      );

    request.user = payload;

    return true;
  }
}