import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { port } from './config/config';
import { APILogger } from './services/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });

  console.log('port', port);

  // Configuracion Swagger
  const config = new DocumentBuilder()
    .setTitle('Api Canje de premios')
    .setDescription(
      'Api que se utiliza en el canje de premios en los quioscos y para el registro y control de premios desde el administrador',
    )
    .setVersion('1.0')
    .setContact(
      'Equipo de desarrollo Allas Repuestos',
      'www.allasonline.com',
      'desarrollo@allasrepuestos.com',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Condifuracion de Pipe de validacion de datos
  app.useGlobalPipes(new ValidationPipe());

  // Inicia el servidor
  setTimeout(() => {
    APILogger.logger.info(`[Api iniciando en el puerto] [${port}]`);
  }, 1000);

  await app.listen(port ?? 3000);
}
bootstrap();
