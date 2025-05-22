const BaseApi = require("./baseApi");

class BookApi extends BaseApi{
    constructor(db){
        super()
        this.url = '/book'
    }
}

module.exports = BookApi;