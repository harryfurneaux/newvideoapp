import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AutoPropertyValidationPipe } from './utils/auto-property-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  app.useGlobalPipes(
    new AutoPropertyValidationPipe(),
    new ValidationPipe()
  );
  
  await app.listen(4000);
}
bootstrap();
