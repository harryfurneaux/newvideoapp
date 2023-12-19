import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    MessageBody,
  } from '@nestjs/websockets';
  import { Server, Socket  } from 'socket.io';
  
  @WebSocketGateway()
  export class MessagesGateway {
    @WebSocketServer()
    server: Server;
  
    handleConnection(client: Socket) {
        console.log(`Client connected: ${client.id}`);
      }
    
      handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
      }
    

    @SubscribeMessage('message')
    handleMessage(@MessageBody() data: any): void {
      this.server.emit('message', data); 

    }
  }
  