const BaseApi = require("./baseApi");
const config = require("config");

class BookApi extends BaseApi {

    DB_NAME = config.get("DB_NAME");
    TABLE_NAME = "book";

    constructor(db) {
        super()
        this._dbRepository = db;
    }

    AddNewBook(book_id, book_name, mode, callback) {
        this._dbRepository.getConnection(() => {
            var queryString = `INSERT INTO ${this.DB_NAME}.${this.TABLE_NAME} (book_id, book_name, mode) VALUES ('${book_id}', '${book_name}', '${mode}')`;
            console.log("Query " + queryString);

            this._dbRepository.executeQuery(queryString, (rows) => {
                if (!rows) {
                    console.log("Query fail");
                    callback(false);
                } else if (rows) {
                    callback({ book_id: book_id });
                } else {
                    console.log("Query Not found");
                    callback(false);
                }
            });
        });
    }

    getBookTherapy(callback) {
        this._dbRepository.getConnection(() => {
            var queryString = `SELECT * FROM ${this.DB_NAME}.${this.TABLE_NAME} WHERE mode = '001'`;
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

    getBookThai(callback) {
        this._dbRepository.getConnection(() => {
            var queryString = `SELECT * FROM ${this.DB_NAME}.${this.TABLE_NAME} WHERE mode = '002'`;
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

    getBookDentist(callback) {
        this._dbRepository.getConnection(() => {
            var queryString = `SELECT * FROM ${this.DB_NAME}.${this.TABLE_NAME} WHERE mode = '003'`;
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

    getBook(callback) {
        this._dbRepository.getConnection(() => {
            var queryString = `SELECT * FROM ${this.DB_NAME}.${this.TABLE_NAME} WHERE book_id = '${book_id}'`;
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

    getAllBook(callback) {
        this._dbRepository.getConnection(() => {
            var queryString = `SELECT * FROM ${this.DB_NAME}.${this.TABLE_NAME}'`;
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

    editBook(book_id, book_name, mode, callback) {
        this._dbRepository.getConnection(() => {
            var queryString = `UPDATE ${this.DB_NAME}.${this.TABLE_NAME} SET book_id='${book_id}', book_name='${book_name}', mode='${mode}' WHERE book_id='${book_id}'`;
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

    deleteBook(book_id, callback) {
        this._dbRepository.getConnection(() => {
            var queryString = `DELETE FROM ${this.DB_NAME}.${this.TABLE_NAME} WHERE book_id = '${book_id}'`;
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

module.exports = BookApi;