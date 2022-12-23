import knex, { Knex } from 'knex';
import knexConfig from '../database/knexfile';

export default class {
  knex: Knex;
  
  constructor(env: string) {
    this.knex = knex(knexConfig.development);
    console.log('🧨 DB prepared');
  }
  
  async getCustomers(): Promise<{ name: string }[]> {
    const data = await this.knex.raw('SELECT name FROM sqlite_schema');
    return data;  
  }
  
}