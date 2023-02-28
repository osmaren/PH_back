exports.up = function (knex) {
    return knex.schema.createTable('ticket_prices', function (table) {
        table.increments('id').primary();
        table.decimal('price').notNullable();
        table.integer('duration').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('ticket_prices');
};
