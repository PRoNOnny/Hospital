const BaseApi = require("./baseApi");
const config = require("config");

class PostApi extends BaseApi {

    DB_NAME = config.get("DB_NAME");
    TABLE_NAME = "post";

    constructor(db) {
        super()
        this._dbRepository = db;
    }

    AddNewPost(post_id, post_name, picture, text, callback) {
        this._dbRepository.getConnection(() => {
            var queryString = `INSERT INTO ${this.DB_NAME}.${this.TABLE_NAME} (post_id, post_name, picture, text) VALUES ('${post_id}', '${post_name}', '${picture}', '${text}')`;
            console.log("Query " + queryString);

            this._dbRepository.executeQuery(queryString, (rows) => {
                if (!rows) {
                    console.log("Query fail");
                    callback(false);
                } else if (rows) {
                    callback({ post_id: post_id });
                } else {
                    console.log("Query Not found");
                    callback(false);
                }
            });
        });
    }

    getPost(callback) {
        this._dbRepository.getConnection(() => {
            var queryString = `SELECT * FROM ${this.DB_NAME}.${this.TABLE_NAME}`;
            console.log("Query " + queryString);

            this._dbRepository.executeQuery(queryString, (rows) => {
                if (!rows) {
                    console.log("Query fail");
                    callback(false);
                } else if (rows) {
                    callback(rows);
                } else {
                    console.log("Query Not found");
                    callback(false);
                }
            });
        });
    }

    getPostById(post_id, callback) {
        this._dbRepository.getConnection(() => {
            var queryString = `SELECT * FROM ${this.DB_NAME}.${this.TABLE_NAME} WHERE post_id='${post_id}'`;
            console.log("Query " + queryString);

            this._dbRepository.executeQuery(queryString, (rows) => {
                if (!rows) {
                    console.log("Query fail");
                    callback(false);
                } else if (rows) {
                    callback(rows);
                } else {
                    console.log("Query Not found");
                    callback(false);
                }
            });
        });
    }

    editPost(post_id, post_name, picture, text, callback) {
        this._dbRepository.getConnection(() => {
            var queryString = `UPDATE ${this.DB_NAME}.${this.TABLE_NAME} SET post_name='${post_name}', picture='${picture}', text= '${text}' WHERE post_id='${post_id}'`;
            console.log("Query " + queryString);

            this._dbRepository.executeQuery(queryString, (rows) => {
                if (!rows) {
                    console.log("Query fail");
                    callback(false);
                } else if (rows) {
                    callback(true);
                } else {
                    console.log("Query Not found");
                    callback(false);
                }
            });
        });
    }

    deletePost(post_id, callback) {
        this._dbRepository.getConnection(() => {
            var queryString = `DELETE FROM ${this.DB_NAME}.${this.TABLE_NAME} WHERE post_id = '${post_id}'`;
            console.log("Query " + queryString);

            this._dbRepository.executeQuery(queryString, (rows) => {
                if (!rows) {
                    console.log("Query fail");
                    callback(false);
                } else if (rows) {
                    callback(true);
                } else {
                    console.log("Query Not found");
                    callback(false);
                }
            });
        });
    }
}

module.exports = PostApi;