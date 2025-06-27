import { Sequelize } from "sequelize";
import { SQLSERVER_URI } from "./config.js";

const db = new Sequelize(SQLSERVER_URI, {
  dialect: 'mssql',
  timezone: '-06:00',
  dialectOptions: {
    options: {
      trustServerCertificate: true // Solo esto para desarrollo local
    }
  }
});

export default db;
