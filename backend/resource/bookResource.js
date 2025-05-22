const BaseResource = require("./baseResource");
const BookService = require("../service/bookService")
 
class BookResource extends BaseResource {
    constructor(db){
        super()
        this.bookService = new BookService(db)
    }

    init(app){

    }


}

module.exports = BookResource;