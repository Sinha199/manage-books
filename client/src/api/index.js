import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createBook = payload =>api.post('/book',payload)
export const getBook = () =>api.get('/book')
export const updateBook = (id,payload)=>api.put('/book/${id}',payload)
export const getBookById = id => api.get('/book/${id')
export const deleteBook = id =>api.delete('/book/${id}')

const apis = {
    createBook,
    getBook,
    updateBook,
    getBookById,
    deleteBook
}

export default apis