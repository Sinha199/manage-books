const express = require('express')

const movieController = require('../controllers/book-controller')

const router = express.Router

router.get('/book/:id' , getBookbyId)
router.get('/book',getBook)
router.post('/book' , createBook)
router.put('/book/:id', updateBook)
router.delete('/book/:id',deleteBook)

module.exports=router