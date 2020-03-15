const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "p1us8ottbqwio8hv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "oor35z7wolq9sdxl",
  password: "je3or8gh84rfez36",
  database: "g7zthzq485ubl5al"
});

connection.connect(err => {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("DB Connected as id: " + connection.threadId);
});

module.exports = connection;
