import 'dotenv/config';

// API
export const PORT = process.env.PORT || 4000;

export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";

// FRONT-END
export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

// DATABASE
const user = process.env.USER_DB || 'sa';
const password = process.env.PASSWORD_DB || 'JosueP7798';
const host = process.env.HOST_DB || 'localhost';
const port = process.env.PORT_DB || 1433;
const database = process.env.DATABASE || 'airlines_TaskDb';

export const SQLSERVER_URI = `mssql://${user}:${encodeURIComponent(password)}@${host}:${port}/${database}`;



//
// EMAIL
//export const USEREMAIL = process.env.USEREMAIL || 'root';
//export const USERPASSEMAIL = process.env.USERPASSEMAIL || 'root';