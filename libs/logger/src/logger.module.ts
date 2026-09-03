import { Global, Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';

@Global()
@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env.LOG_LEVEL || 'info',

        base: {
          service: process.env.SERVICE_NAME,
          environment: process.env.NODE_ENV,
        },

        transport:
          process.env.NODE_ENV !== 'production'
            ? {
                target: 'pino-pretty',
                options: {
                  singleLine: true,
                  colorize: true,
                },
              }
            : undefined,

        redact: {
          paths: [
            'req.headers.authorization',
            'req.headers.cookie',
            '*.password',
            '*.accessToken',
            '*.refreshToken',
          ],
          censor: '[REDACTED]',
        },
      },
    }),
  ],
  exports: [LoggerModule],
})
export class AppLoggerModule {}
