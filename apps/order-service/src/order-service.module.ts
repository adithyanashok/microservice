import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { OrderServiceController } from './order-service.controller';
import { OrderServiceService } from './order-service.service';
import { AppConfigModule } from '@app/config';
import { AppLoggerModule } from '@app/logger';
import { RequestIdMiddleware } from '@app/common';

@Module({
  imports: [AppConfigModule, AppLoggerModule],
  controllers: [OrderServiceController],
  providers: [OrderServiceService],
})
export class OrderServiceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('*');
  }
}
