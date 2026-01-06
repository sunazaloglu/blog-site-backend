export async function up(knex) {
  await knex.schema.createTable("comments", (table) => {
    table.increments("id").primary();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.string("commenter_name").notNullable();
    table.text("content").notNullable();
    table
      .integer("post_id")
      .references("id")
      .inTable("posts")
      .onDelete("CASCADE");
  });
}

export async function down(knex) {
  await knex.schema.dropTable("comments");
}
