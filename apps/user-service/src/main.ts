import { NestFactory } from '@nestjs/core';
import { UserServiceModule } from './user-service.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

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

  const port = configService.get<number>('USER_SERVICE_PORT');

  await app.listen(port ?? 3001);

  console.log(`User service running on port ${port}`);
}
bootstrap();
