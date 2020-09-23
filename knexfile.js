// Update with your config settings.
require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
        host: process.env.DATABASE_URL,
        user: 'postgres',
        password: 'myWife87##',
        database: 'dev-desk'
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './data/seeds' },
  },

  testing: {
    client: 'sqlite3',
    connection: { filename: './data/test.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './data/seeds' },
  }, 

  staging: {
    client: 'postgresql',
    connection: {
      database: 'dev-desk',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
        host: process.env.DATABASE_URL,
        user: 'ohooluhiktrbea',
        password: '68482c5d6d76d405fb9f6682a65f47e175eb9a0ebbad6fc7551cdf6c32b2e5ae',
        database: 'postgresql-pointy-00479'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: { directory: './data/seeds' }
  }

};
