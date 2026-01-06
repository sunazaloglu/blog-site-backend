export async function up(knex) {
  await knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("deleted_at").nullable();
    table.string("title").notNullable();
    table.text("content").notNullable();
    table.timestamp("published_at").nullable();
    table
      .integer("category_id")
      .references("id")
      .inTable("categories")
      .onDelete("CASCADE");
    table.string("name").notNullable();
  });
}

export async function down(knex) {
  await knex.schema.dropTable("categories");
}
