const mysql = require("mysql2/promise");
const { host, user, port, password, database } = require("./secret");

exports.pool = mysql.createPool({
  host: host,
  user: user,
  port: port,
  password: password,
  database: database,
});
