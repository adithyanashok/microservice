import { Module } from '@nestjs/common';
import { ShutdownService } from './lifecycle/shutdown.service';

@Module({
  providers: [ShutdownService],
  exports: [ShutdownService],
})
export class CommonModule {}
