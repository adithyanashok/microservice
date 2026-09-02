import { NestFactory } from '@nestjs/core';
import { OrderServiceModule } from './order-service.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(OrderServiceModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>('ORDER_SERVICE_PORT');

  await app.listen(port ?? 3002);
}
bootstrap();
