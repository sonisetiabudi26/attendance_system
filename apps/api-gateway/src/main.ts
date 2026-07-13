import { NestFactory } from "@nestjs/core";
import { ApiGatewayModule } from "./api-gateway.module";
import { AppValidationPipe } from "@attendance/common/pipes";
import {
  GrpcToHttpExceptionFilter,
  HttpExceptionFilter,
  ResponseInterceptor,
} from "@attendance/common";

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  app.enableCors({
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
  ],
  credentials: true,
});
  app.useGlobalPipes(new AppValidationPipe());

  app.useGlobalFilters(
    new GrpcToHttpExceptionFilter(),
    new HttpExceptionFilter()
  );

  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(3000);
}
bootstrap();
