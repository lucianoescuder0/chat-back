import { registerAs } from '@nestjs/config';

export default registerAs('chat', () => ({
  openai_api_key: process.env.OPENAI_API_KEY
}));