import { join } from 'path';
import 'dotenv/config';
import { Knex } from 'knex';
import { knexSnakeCaseMappers } from 'objection';

module.exports = {
  development: {
    client: 'pg',
    debug: !!+process.env.DB_DEBUG,
    connection: {
      host: 'localhost',
      port: '5432',
      database: 'rentals',
      user: 'md.zaid',

      charset: 'utf8',
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: './database/seeds',
    },
    migrations: {
      directory: join(__dirname, 'database/migrations'),
    },
    ...knexSnakeCaseMappers(),
  },
} as Knex.Config;
