import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: 'http://localhost:3000', // Specify your frontend domain here
    credentials: true, // Allow credentials (e.g., cookies, authorization headers)
  });
  await app.listen(3030);
}
bootstrap();
