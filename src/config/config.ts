import { PoolConfig } from 'pg';

//* <- BD de Produccion ->
export const dbConfig: PoolConfig = {
  host: 'containers-us-west-95.railway.app',
  port: 6906,
  database: 'railway',
  user: 'postgres',
  password: 'oXCMwJmzvsPHw0ZPHdzb',
};

export const port = 7080;
