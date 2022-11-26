import mysql from "mysql2";

const PORT=3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "urbanita22",
  //database: "xa_char_sheet"
  database: "bdtonylydia"
});

export {PORT, db};