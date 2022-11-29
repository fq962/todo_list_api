import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TareasService } from './tareas.service';
import { ActualizaTareaDTO } from './dto/update-tarea.dto';
import { CrearTareaDTO } from './dto/post-tarea.dto';
import { EleminaTareaDTO } from './dto/delete-tarea.dto';

@Controller('tareas')
export class TareasController {
  constructor(private readonly tareasService: TareasService) {}

  @Post()
  postTarea(@Body() params: CrearTareaDTO) {
    return this.tareasService.crearTarea(params);
  }

  @Get()
  getTareas() {
    return this.tareasService.obtieneTareas();
  }

  @Patch(':tareaId')
  patchTarea(
    @Param() tareaId: ActualizaTareaDTO,
    @Body() params: ActualizaTareaDTO,
  ) {
    return this.tareasService.actualizaTarea(tareaId, params);
  }

  @Delete()
  eliminaTarea(@Query() params: EleminaTareaDTO) {
    return this.tareasService.eliminaTarea(params);
  }
}
