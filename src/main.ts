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

  // Enable CORS (Cross-Origin Resource Sharing)
  app.enableCors({
    origin: 'https://syllabus-app.vercel.app/', // Specify your frontend domain here
    // origin: 'http://localhost:3000/', 
    credentials: true, // Allow credentials (e.g., cookies, authorization headers)
  });

  // Retrieve the port from environment variables or use a default value
  const port = process.env.PORT || 3030;

  // Start listening on the specified port
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
