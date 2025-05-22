const BaseService = require('./baseService')
const UserApi = require('../api/userApi')

class UserService extends BaseService {
    constructor(db){
        super()
        this.userApi = new UserApi(db)
    }

}

module.exports = UserService;