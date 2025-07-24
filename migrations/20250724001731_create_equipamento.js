/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('equipamento', table => {
    table.increments('id_equipamento').primary();
    table.boolean('status').notNullable().defaultTo(false);
    table.integer('espaco_idespaco')
      .unsigned()         
      .nullable()         
      .references('id_espaco')
      .inTable('espaco')
      .onDelete('SET NULL');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('equipamento');
};
