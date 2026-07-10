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

    const body = exception.getResponse() as any;

    response.status(status).json({
      success: false,
      timestamp: new Date().toISOString(),
      path: request.url,
      error: {
        code:
          body.error?.code ??
          HttpStatus[status],

        message:
          body.error?.message ??
          body.message ??
          exception.message,
      },
    });
  }
}