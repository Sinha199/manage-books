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

updateBook = async (req,res) =>{

    const body = req.body
    if(!body){
        return res.status(400).json({
            success:false,
            error:'Something missing , must provide body to update',
        })
    }

    Book.findOne({_id:req.params.id},(err,book)=>{
        if(err){
            return res.status(404).json({
                err,
                message:'Oops:( book not found',
            })
        }

        book.name=body.name
        book.pages=body.pages
        book.genre=body.genre

        book
            .save()
            .then(()=>{
                return res.status(200).json({
                    success:true,
                    id:book._id,
                    meesage:'Book updated!',
                })
            })
            .catch(error=>{
                return res.status(404).json({
                    error,
                    message:'Oops , Book not updated!',
                })
            })
    })
}

deleteBook = async(req,res)=>{
    await Book.findOneAndDelete({_id:req.params.id},(err,movie)=>{
        if(err){
            return res.status(400).json({success:false,error:err})
        }
        if(!book)
        {
            return res
                .status(404)
                .json({success:false,error:'Book not found'})
        }
        return res.status(200).json({success:true,data:book})

    })
    .catch(err=>console.log(err))
}
