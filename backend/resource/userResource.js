const BaseResource = require("./baseResource");
const UserService = require("../service/userService")
 
class UserResource extends BaseResource {
    constructor(db){
        super()
        this.userService = new UserService(db)
    }

    init(app){
        this.loginUser(app)
    }

    loginUser(app){

    }

}

module.exports = UserResource;