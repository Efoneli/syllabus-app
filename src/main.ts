// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ConfigService } from '@nestjs/config';


// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const configService = app.get(ConfigService);
//   app.enableCors({
//     origin: 'http://localhost:3000/', // Specify your frontend domain here
//     credentials: true, // Allow credentials (e.g., cookies, authorization headers)
//   });
// }
// bootstrap();



import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: 'https://syllabus-app.vercel.app/', // Specify your frontend domain
    credentials: true, // Allow credentials (e.g., cookies, authorization headers)
  });

  // Use the PORT provided by Railway or default to 3030 for local development
  const port = process.env.PORT || 3030;

  // Listen on the specified port and on all network interfaces (0.0.0.0)
  await app.listen(port, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();

