/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class EleminaTareaDTO {
  @ApiProperty({
    description: 'Identificador unico de la tarea',
    required: true,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  public tareaId: number;
}
