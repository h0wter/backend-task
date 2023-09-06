import "dotenv/config";
import { Sequelize } from "sequelize";

const { DB_DIALECT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD } = process.env;

const query = `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/backend-task`;
console.log(query);
const db = new Sequelize(
  `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/backend-task`,
  {
    dialect: DB_DIALECT,
    host: DB_HOST,
    port: DB_PORT,
    define: {
      timestamps: false,
    },
  }
);

export default db;
