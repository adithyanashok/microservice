import { Injectable, Logger, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class ShutdownService implements OnApplicationShutdown {
  private readonly logger = new Logger(ShutdownService.name);

  onApplicationShutdown(signal?: string) {
    this.logger.warn(`Shutdown signal received: ${signal ?? 'unknown'}`);
  }
}
