const express = require('express')
const mainRouter = require('./router/mainRouter')
const app = express()
const mongoose = require('./model/database/mongoDb')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',mainRouter)



app.listen(5000,()=>{
    mongoose.intialise()
    console.log('server connected on port 5000')
})