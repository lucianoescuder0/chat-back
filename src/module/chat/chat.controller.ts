import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { MessageDto } from './dto/message-dto';

@Controller('api/v1/chat')
export class ChatController {

  constructor(private chatService: ChatService) {
  }

  @Post()
  messageChatGPT(@Body() message: MessageDto[]){
    return this.chatService.messageChatGPT(message)
  }

}
