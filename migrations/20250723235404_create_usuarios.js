/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('usuarios', table => {
    table.increments('idusuario').primary();
    table.string('matricula').notNullable();
    table.string('nome').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('usuarios');
};