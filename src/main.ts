import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { env } from 'node:process';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  // se copia para poder usar los decoradores en las dto -
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      //para que combierta en numero los queryParams
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  // app.setGlobalPrefix('api');
  const origin = process.env.FRONTEND_ORIGINS
                    ? process.env.FRONTEND_ORIGINS.split(',')
                    : [`http://localhost:${process.env.PORT}`]
  app.enableCors({
    origin,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    credentials: true
  });
  
  await app.listen(process.env.PORT);
  
}
bootstrap();
