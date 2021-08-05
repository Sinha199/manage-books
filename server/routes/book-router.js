const express = require('express')

const movieController = require('../controllers/book-controller')

const router = express.Router

router.get('/book/:id' , movieController.getBookById)
router.get('/book',movieController.getBook)
router.post('/book' , movieController.createBook)
router.put('/book/:id', movieController.updateBook)
router.delete('/book/:id',movieController.deleteBooknpm)

module.exports=router