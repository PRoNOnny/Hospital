const BaseApi = require("./baseApi");

class UserApi extends BaseApi{
    constructor(db){
        super()
        this.url = '/user'
    }
}

module.exports = UserApi;