/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsInt, IsOptional } from 'class-validator';

export class ActualizaTareaDTO {
  @ApiProperty({
    description: 'Identificador unico de la tarea',
    required: true,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  public tareaId: number;

  @ApiProperty({
    description: 'Booleano que finaliza la tarea',
    required: true,
  })
  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  public finalizada: boolean;
}
