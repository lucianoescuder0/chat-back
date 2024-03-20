import { Module } from '@nestjs/common';
import { ChatModule } from './module/chat/chat.module';
import { ConfigModule } from '@nestjs/config';
import configurationChat from './module/configuration/configuration-chat';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configurationChat],
      envFilePath: `./env/${process.env.NODE_ENV}.env`,
      isGlobal: true
    }),
    ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
