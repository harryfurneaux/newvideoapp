import { Injectable } from '@nestjs/common';
import { StreamChat, MessageResponse } from 'stream-chat';
import { config } from 'dotenv';

config();

@Injectable()
export class MessagingService {
  private client: StreamChat;

  constructor() {
    this.client = new StreamChat(process.env.STREAM_CHAT_API_KEY, process.env.STREAM_CHAT_SECRET);
  }

  async initializeUser(userId: string) {
    const user = await this.client.upsertUser({
      id: userId,
      name: `User-${userId}`,
    });

    const token = this.client.createToken(userId);

    return { user, token };
  }

  async createChannel(channelId: string, members: string[], createdByUserId: string) {
    
    const channel = this.client.channel('messaging', channelId, {
      members,
      created_by_id: createdByUserId,
    });

    await channel.create();

    return channel;
  }

  async sendMessage(channelId: string, userId: string, message: string) {
    const channel = this.client.channel('messaging', channelId);
    await channel.sendMessage({
      text: message,
      user_id: userId,
    });
  }

  async getMessages(channelId: string): Promise<MessageResponse[]> {
    const channel = this.client.channel('messaging', channelId);

    const {messages} = await channel.query({
      messages: { limit: 100 }, 
    });

    return messages;
  }

}
