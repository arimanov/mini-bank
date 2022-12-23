import { Knex } from 'knex';
import path from 'path';



export default {
  development: {
    client: 'better-sqlite3',
    connection: {
      filename: `${path.resolve(__dirname)}/dev.sqlite3`
    },
    migrations: {
      directory: "./migrations",
    },
  }
};
