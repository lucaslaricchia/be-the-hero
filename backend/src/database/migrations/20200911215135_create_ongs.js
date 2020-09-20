
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('whatsapp').notNullable();
        table.string('senha').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
