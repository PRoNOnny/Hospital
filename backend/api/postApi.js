const BaseApi = require("./baseApi");

class PostApi extends BaseApi{
    constructor(db){
        super()
        this.url = '/post'
    }
}

module.exports = PostApi;