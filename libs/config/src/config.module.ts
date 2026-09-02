import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigModule } from '@nestjs/config';
import { envValidationSchema } from './env.validation';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,

      cache: true,

      validationSchema: envValidationSchema,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class AppConfigModule {}
