const BaseService = require('./baseService')
const UserApi = require('../api/userApi')

class UserService extends BaseService {
    constructor(db){
        super()
        this.userApi = new UserApi(db)
    }

    loginUser(user, password, callback){
        this.userApi.loginUser(user, password, (res)=>{
            if(res){
                callback(res)
            } else {
                callback(false)
            }
        })
    }

}

module.exports = UserService;