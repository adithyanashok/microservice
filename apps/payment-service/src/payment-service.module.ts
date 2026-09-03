import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PaymentServiceController } from './payment-service.controller';
import { PaymentServiceService } from './payment-service.service';
import { AppConfigModule } from '@app/config';
import { AppLoggerModule } from '@app/logger';
import { RequestIdMiddleware } from '@app/common';

@Module({
  imports: [AppConfigModule, AppLoggerModule],
  controllers: [PaymentServiceController],
  providers: [PaymentServiceService],
})
export class PaymentServiceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('*');
  }
}
