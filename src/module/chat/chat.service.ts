import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { MessageDto } from './dto/message-dto';

@Injectable()
export class ChatService {
  constructor(
    private configService: ConfigService,
  ) {
  }

  async messageChatGPT(messages: MessageDto[]) {
    const messageBot = {
      role: 'assistant',
      content: "Lo siento, no he entendido."
    }
    const openai = new OpenAI({
      apiKey: this.configService.get('chat.openai_api_key'),
    });
    const response = await openai.chat.completions.create({
      messages,
      model: 'gpt-3.5-turbo',
    });
    if (response.choices.length >= 0) {
     messageBot.content = response.choices[0].message.content;
    }
    return messageBot;
  }

}
