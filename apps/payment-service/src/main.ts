import { NestFactory } from '@nestjs/core';
import { PaymentServiceModule } from './payment-service.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(PaymentServiceModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const port = configService.get<number>('PAYMENT_SERVICE_PORT');

  await app.listen(port ?? 3003);
}
bootstrap();
