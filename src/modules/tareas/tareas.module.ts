import { Module } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { TareasController } from './tareas.controller';
import { PgService } from 'src/services/pg.service';

@Module({
  controllers: [TareasController],
  providers: [TareasService, PgService],
})
export class TareasModule {}
