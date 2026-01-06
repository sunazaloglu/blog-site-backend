import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    database: process.env.DB_NAME || "blog_site_backend",
    user: process.env.DB_USER || "sunazaloglu",
    password: process.env.DB_PASSWORD || "",
  },
});

export default db;

