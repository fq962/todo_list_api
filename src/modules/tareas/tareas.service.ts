import { Injectable } from '@nestjs/common';
import { PgService } from 'src/services/pg.service';
import { EleminaTareaDTO } from './dto/delete-tarea.dto';
import { CrearTareaDTO } from './dto/post-tarea.dto';
import { ActualizaTareaDTO } from './dto/update-tarea.dto';

@Injectable()
export class TareasService {
  constructor(private pgService: PgService) {}

  async crearTarea(params: CrearTareaDTO) {
    // <- Usamos la funcion para insertar tareas ->
    const creaTarea = await this.pgService.pgFunc(
      'todo_app.ft_td_inserta_tarea',
      [params.tarea],
    );

    return creaTarea;
  }

  async obtieneTareas() {
    // <- Usamos la funcion que obtiene todas las tareas ->
    const tareas = await this.pgService.pgFunc('todo_app.ft_td_obtiene_tareas');

    return tareas;
  }

  async actualizaTarea(tarea: ActualizaTareaDTO, params: ActualizaTareaDTO) {
    // <- Usamos la funcion que actualiza el estado de la tarea ->
    const finalizada = await this.pgService.pgFunc(
      'todo_app.ft_td_actualizada_estado_tarea',
      [tarea.tareaId, params.finalizada],
    );

    return finalizada;
  }

  async eliminaTarea(params: EleminaTareaDTO) {
    // <- Usamos la funcion que elimina la tarea ->
    const eliminada = await this.pgService.pgFunc(
      'todo_app.ft_td_elimina_tarea',
      [params.tareaId],
    );

    return eliminada;
  }
}
