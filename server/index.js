const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3000

app.use(cors())
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res) =>{
    res.send({hello:'world'})
})

app.listen(apiPort,()=>console.log('Server ruuning on port ${apiPort}'))