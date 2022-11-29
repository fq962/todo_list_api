/* eslint-disable prettier/prettier */
import { dbConfig } from '../config/config';
import { Pool } from 'pg';

export const pgFunc = async (
  funcion: string,
  parametros?: Array<string | number | boolean | string[] | number[] | null>,
) => {
  try {
    let respuesta;
    const pool = new Pool(dbConfig);

    let keyFun: any = funcion.split('.')[1];
    keyFun = keyFun.toString();

    let rango = [''];
    if (parametros) {
      rango = Array.from(
        { length: parametros.length },
        (x, i) => `$${(i + 1).toString()}`,
      );
    }

    parametros
      ? (respuesta = await pool.query(
          'SELECT ' + funcion + `(${rango})`,
          parametros,
        ))
      : (respuesta = await pool.query('SELECT ' + funcion + '()'));

    pool.end();

    return respuesta.rows[0][`${keyFun}`];
  } catch (error) {
    throw error;
  }
};
