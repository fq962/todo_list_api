/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class CrearTareaDTO {
  @ApiProperty({
    description: 'Descripcion de la tarea',
    required: true,
  })
  @IsOptional()
  @Type(() => String)
  @IsString()
  public tarea: string;
}
