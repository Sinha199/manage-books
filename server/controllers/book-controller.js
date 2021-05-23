const Book = require('../models/book-model')

createBook = (req,res) =>{
    const body=req.body
    if(!body)
    {
        return res.status(400).json({
            success :false,
            error:'You must provide a book',
        })
    }
}

