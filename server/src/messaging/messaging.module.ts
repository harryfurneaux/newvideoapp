// messaging.module.ts
import { Module } from '@nestjs/common';
import { MessagingService } from './services/messaging.service';
import { MessagingController } from './controllers/messaging.controller';

@Module({
  controllers: [MessagingController],
  providers: [MessagingService],

  exports: [MessagingService]

})
export class MessagingModule {}
