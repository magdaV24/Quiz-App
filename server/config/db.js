import mysql from "mysql";

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "test2345",
  database: "quiz_app",
});

export default db;
