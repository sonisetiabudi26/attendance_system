import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        /**
         * Tidak membungkus response kosong
         * misal logout()
         */
        if (
          data === undefined ||
          data === null
        ) {
          return {
            success: true,
          };
        }

        /**
         * Pagination
         */
        if (
          typeof data === 'object' &&
          data &&
          'meta' in data &&
          'data' in data
        ) {
          return {
            success: true,
            data: (data as any).data,
            meta: (data as any).meta,
          };
        }

        /**
         * Default
         */
        return {
          success: true,
          data,
        };
      }),
    );
  }
}