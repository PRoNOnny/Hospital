const BaseService = require('./baseService')
const BookApi = require('../api/bookApi.js')

class BookService extends BaseService {
    constructor(db){
        super()
        this.bookApi = new BookApi(db)
    }

}

module.exports = BookService;