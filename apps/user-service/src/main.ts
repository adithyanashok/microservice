import { NestFactory } from '@nestjs/core';
import { UserServiceModule } from './user-service.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from '@app/common';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(UserServiceModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useLogger(app.get(Logger));

  app.enableShutdownHooks();

  app.useGlobalFilters(new HttpExceptionFilter());

  const port = configService.get<number>('USER_SERVICE_PORT');

  await app.listen(port ?? 3001);

  console.log(`User service running on port ${port}`);
}
bootstrap();
