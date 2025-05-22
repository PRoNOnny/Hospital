const mysql = require("mysql2");
const config = require("config");

class DBRepository {
  constructor() {
    this.connection = mysql.createConnection({
      host: config.get("DB_HOST"),
      user: config.get("DB_USER"),
      password: config.get("DB_PASSWORD"),
      database: config.get("DB_NAME"),
    });
  }

  getConnection(callback) {
    this.connection.connect((connection) => {
      if (!connection) {
        callback(true);
      } else {
        console.log("Connection fail to create connection.");
        callback(false);
      }
    });
  }

  executeQuery(queryString, callback) {
    this.connection.query(queryString, (err, rows, field) => {
      if (err) {
        callback(false);
      } else {
        callback(rows);
      }
    });
  }
}

module.exports = DBRepository;