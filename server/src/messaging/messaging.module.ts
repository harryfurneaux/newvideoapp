import { Module } from '@nestjs/common';
import { MessagingService } from './services/messaging.service';
import { MessagingController } from './controllers/messaging.controller';
import { MessagesGateway } from './gateways/messaging.gateway';

@Module({
  controllers: [MessagingController],
  providers: [MessagingService, MessagesGateway],

  exports: [MessagingService]

})
export class MessagingModule {}
