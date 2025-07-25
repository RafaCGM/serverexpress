/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('equipamento', function(table) {
    table.integer('espaco_num_espaco').unsigned().nullable();

    table.foreign('espaco_num_espaco')
      .references('num_espaco')
      .inTable('espaco')
      .onDelete('SET NULL');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('equipamento', function(table) {
    table.dropForeign('espaco_num_espaco');
    table.dropColumn('espaco_num_espaco');
  });
};