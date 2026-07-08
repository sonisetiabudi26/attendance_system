import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
} from '@nestjs/common';

import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(
        exception: unknown,
        host: ArgumentsHost,
    ): void {
        const ctx = host.switchToHttp();

        const response = ctx.getResponse<Response>();

        const request = ctx.getRequest<Request>();

        let status = HttpStatus.INTERNAL_SERVER_ERROR;

        let message = 'Internal server error';

        let errors: unknown = undefined;

        if (exception instanceof HttpException) {
            status = exception.getStatus();

            const exceptionResponse = exception.getResponse();

            if (typeof exceptionResponse === 'string') {
                message = exceptionResponse;
            } else {
                const res = exceptionResponse as Record<string, unknown>;

                message = (res.message as string) ?? exception.message;

                if (Array.isArray(res.message)) {
                    message = 'Validation failed';

                    errors = res.message.map((item) => ({
                        message: item,
                    }));
                }

                if (res.errors) {
                    errors = res.errors;
                }
            }
        }

        response.status(status).json({
            success: false,
            statusCode: status,
            message,
            errors,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
}