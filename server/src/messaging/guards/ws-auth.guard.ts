// ws-auth.guard.ts

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';

@Injectable()
export class WsAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const client = context.switchToWs().getClient();
    const { senderId, recipientId } = client.handshake.query;
    
    // Add your authentication logic here

    if (!senderId || !recipientId) {
      throw new WsException('Invalid WebSocket request');
    }

    return true;
  }
}
