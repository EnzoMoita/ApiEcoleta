import knex from 'knex';
import { config } from 'dotenv';

config();

const connection = knex({
  client: 'pg', 
  connection: process.env.DATABASE_URL, 
});

export default connection;
