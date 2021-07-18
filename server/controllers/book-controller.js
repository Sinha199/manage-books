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
    const book = new Book(body)
    
    if(!book){
        return res.status(400).json({success:false,error:err})
    }

    book
        .save()
        .then(()=> {
            return res.status(201).json({
                success:true,
                id:book._id,
                message:'Book Added!',
            })
        })
        .catch(error =>{
            return res.status(400).json({
                error,
                message:'Oops! Something went wrong!',
            })
        })
}


getBook = (req,res) =>{

}