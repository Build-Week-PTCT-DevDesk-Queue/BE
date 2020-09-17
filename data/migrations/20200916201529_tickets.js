exports.up = function(knex) {
    return knex.schema.createTable('tickets', table => {
      table.increments();
      table.timestamp(true, true);
      table.integer('user-id');
      table.integer('helper-id');
      table.string('title', 255).notNullable();
      table.string('description', 500).notNullable();
      table.string('tried', 255).notNullable();
      table.string('category', 32).notNullable();
      table.boolean('status').defaultTo(false);
    });
  };
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('tickets');
  };