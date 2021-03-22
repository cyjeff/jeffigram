exports.up = function (knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id");
    table.string("user").notNullable();
    table.timestamp("posted_at").defaultTo(knex.fn.now());
    table.string("photo_url", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("posts");
};
