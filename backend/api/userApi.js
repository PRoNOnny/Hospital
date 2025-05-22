const BaseApi = require("./baseApi");
const config = require("config");

class UserApi extends BaseApi {

    DB_NAME = config.get("DB_NAME");
    TABLE_NAME = "user";

    constructor(db) {
        super()
        this._dbRepository = db;
    }

    loginUser(user, pass, callback) {
        this._dbRepository.getConnection(() => {
            var queryString = `SELECT * FROM ${this.DB_NAME}.${this.TABLE_NAME} WHERE username = '${user}' AND password = '${pass}'`;
            console.log("Query " + queryString);

            this._dbRepository.executeQuery(queryString, (rows) => {
                if (!rows) {
                    console.log("Query fail");
                    callback(false);
                } else if (rows.length == 1) {
                    callback(rows);
                } else {
                    console.log("Query Not found");
                    callback(false);
                }
            });
        });
    }
}

module.exports = UserApi;