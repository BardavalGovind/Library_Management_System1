const InputValidationException = require("../exceptions/inputValidationException");
const Book = require("../models/Book");

const addBook = async (req, res)=>{
    try{
        console.log("received book data: ", req.body);
        const book = new Book({ ...req.body });
        await book.save();
        console.log("book is saved");
        return res.status(201).send(book);
    }
    catch(err){
        console.error(err);
        return res
            .status(err instanceof InputValidationException ? 400 : 500)
            .send({ message: err.message });
    }
};

const getAllBooks = async (req, res)=>{
    try{
        const bookList = await Book.find();
        return res.status(200).send(bookList);
    }
    catch(err){
        console.error(err);
        return res.status(500).send({message: err.message})
    }
};

module.exports = { addBook, getAllBooks };

