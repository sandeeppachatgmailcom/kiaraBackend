const express = require('express')
const mainRouter = require('./router/mainRouter')
const app = express()
const mongoose = require('./model/database/mongoDb')
//const applyCors = require('./utils/cors')
const cors = require('cors')
const corsOptions = {
    origin:'*',
    credentials: true,
    methods: ['GET', 'PATCH', 'PUT', 'POST','DELETE'],
    allowedHeaders: ['Origin','Access-Control-Allow-Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'x-refresh-token', 'x-user-role','x-verify-token'],
    optionsSuccessStatus: 204,
  };

 
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
 
app.use('/',mainRouter)



app.listen(5000,()=>{
    mongoose.intialise()
    console.log('server connected on port 5000')
})