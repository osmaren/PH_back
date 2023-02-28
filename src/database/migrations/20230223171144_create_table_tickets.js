exports.up = function (knex) {
    return knex.schema.createTable('tickets', (table) => {
        table.increments('id').primary();
        table.string('unit').notNullable();
        table.integer('quantity').notNullable();
        table.decimal('price', 10, 2).notNullable();
        table.integer('duration').notNullable();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tickets');
};
