/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('monitoramento', table => {
    table.increments('id_monitoramento').primary();
    table.integer('equipamento_idequipamento')
      .unsigned()
      .nullable()
      .references('id_equipamento')
      .inTable('equipamento')
      .onDelete('SET NULL'); 
    table.datetime('data_hora').notNullable();
    table.integer('temperatura').notNullable();
    table.integer('umidade').notNullable();
  });
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('monitoramento');
};
