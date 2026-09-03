import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserServiceController } from './user-service.controller';
import { UserServiceService } from './user-service.service';
import { AppConfigModule } from '@app/config';
import { AppLoggerModule } from '@app/logger';
import { RequestIdMiddleware } from '@app/common';
import { HealthModule } from './health/health.module';
import { CommonModule } from '@app/common/common.module';
@Module({
  imports: [AppConfigModule, AppLoggerModule, HealthModule, CommonModule],
  controllers: [UserServiceController],
  providers: [UserServiceService],
})
export class UserServiceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('*');
  }
}
