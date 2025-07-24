// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: '3306',
      database: 'arcondicionadodb',
      user:     'root',
      password: 'kakinho123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
