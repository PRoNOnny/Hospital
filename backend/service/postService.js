const BaseService = require('./baseService')
const PostApi = require('../api/postApi')

class PostService extends BaseService {
    constructor(db){
        super()
        this.postApi = new PostApi(db)
    }

}

module.exports = PostService;