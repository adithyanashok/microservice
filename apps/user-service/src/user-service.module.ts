import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserServiceController } from './user-service.controller';
import { UserServiceService } from './user-service.service';
import { AppConfigModule } from '@app/config';
import { AppLoggerModule } from '@app/logger';
import { RequestIdMiddleware } from '@app/common';
@Module({
  imports: [AppConfigModule, AppLoggerModule],
  controllers: [UserServiceController],
  providers: [UserServiceService],
})
export class UserServiceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('*');
  }
}
