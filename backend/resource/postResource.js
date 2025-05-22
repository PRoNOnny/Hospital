const BaseResource = require("./baseResource");
const PostService = require("../service/postService")
 
class PostResource extends BaseResource {
    constructor(db){
        super()
        this.postService = new PostService(db)
    }

    init(app){
        this.login(app)
    }

    login(app){

    }

}

module.exports = PostResource;