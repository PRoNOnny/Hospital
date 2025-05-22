const BaseResource = require("./baseResource");
const UserService = require("../service/userService")

class UserResource extends BaseResource {
    constructor(db) {
        super()
        this.userService = new UserService(db)
    }

    init(app) {
        this.loginUser(app)
    }

    loginUser(app) {
        app.get("/login", (request, response) => {
            console.log(`Request Login By ${request.query.username}`);
            this.userService.loginUser(
                request.query.username,
                request.query.password,
                (result) => {
                    if (!result) {
                        response.json({ success: false });
                    } else {
                        super.requestLoginUser((token) => {
                            response.json({ success: true, token: token, data: result });
                        });
                    }
                }
            );
        });
    }

}

module.exports = UserResource;