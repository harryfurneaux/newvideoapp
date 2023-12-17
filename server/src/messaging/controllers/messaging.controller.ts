import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MessagingService } from '../services/messaging.service';
import { SendMessageDto } from '../dtos/send-message.dto';
@Controller('messaging')
export class MessagingController {
  constructor(private readonly messagingService: MessagingService) {}

  @Get('/initialize-user/:userId')
  async initializeUser(@Param('userId') userId: string) {
    try {
      const { user, token } = await this.messagingService.initializeUser(
        userId,
      );
      return { user, token };
    } catch (error) {
      return { error: 'Failed to initialize user.' };
    }
  }

  @Get('/create-channel/:channelId/:member1/:member2/:createdByUserId')
  async createChannel(
    @Param('channelId') channelId: string,
    @Param('member1') member1: string,
    @Param('member2') member2: string,
    @Param('createdByUserId') createdByUserId: string,
  ) {
    try {
      const channel = await this.messagingService.createChannel(
        channelId,
        [member1, member2],
        createdByUserId,
      );
      return {
        channelId: channel.cid,
      };
    } catch (error) {
      console.log(error.message);
      return { error: 'Failed to create channel.' };
    }
  }

  @Post('/send-message/:channelId/:userId')
  async sendMessage(
    @Param('channelId') channelId: string,
    @Param('userId') userId: string,
    @Body() sendMessageDto: SendMessageDto,
  ) {
    try {
      await this.messagingService.sendMessage(
        channelId,
        userId,
        sendMessageDto.message,
      );
      return { success: true };
    } catch (error) {
      console.log(error.message);
      return { error: 'Failed to send message.' };
    }
  }

  @Get('/get-messages/:channelId')
  async getMessages(@Param('channelId') channelId: string) {
    try {
      const messages = await this.messagingService.getMessages(channelId);
      return { messages };
    } catch (error) {
      console.error(`Error getting messages: ${error.message}`);
      return { error: 'Failed to get messages.' };
    }
  }
}
