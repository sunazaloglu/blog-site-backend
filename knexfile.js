import dotenv from "dotenv";

dotenv.config();

export default {
  production: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      port: DB_PORT,
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
    },
    migrations: {
      directory: "./src/migrations",
    },
  },
};
