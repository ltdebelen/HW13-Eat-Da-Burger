const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "p@$$w0rd",
    database: "eat_da_burger_db"
  });
}

connection.connect();

module.exports = connection;
