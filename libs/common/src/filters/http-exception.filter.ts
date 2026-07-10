import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter
  implements ExceptionFilter
{
  catch(
    exception: HttpException,
    host: ArgumentsHost,
  ) {
    const ctx = host.switchToHttp();

    const response = ctx.getResponse();

    const request = ctx.getRequest();

    const status = exception.getStatus();

    const body = exception.getResponse();

    const message =
      typeof body === 'string'
        ? body
        : (body as any).message;

    const code =
      typeof body === 'string'
        ? HttpStatus[status]
        : (body as any).errorCode ??
          HttpStatus[status];

    response.status(status).json({
      success: false,
      timestamp: new Date().toISOString(),
      path: request.url,
      error: {
        code,
        message,
      },
    });
  }
}