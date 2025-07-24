/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('espaco', table => {
    table.increments('id_espaco').primary();
    table.integer('num_espaco').notNullable();
    table.integer('usuarios_idusuario')
      .unsigned()         
      .nullable()         
      .references('idusuario')
      .inTable('usuarios')
      .onDelete('SET NULL');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('espaco');
};
