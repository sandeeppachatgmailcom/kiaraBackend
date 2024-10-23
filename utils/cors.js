const cors = require('cors')
const express = require('express')
const app = express()
const corsOptions = {
    origin:'*',
    credentials: true,
    methods: ['GET', 'PATCH', 'PUT', 'POST','DELETE'],
    allowedHeaders: ['Origin','Access-Control-Allow-Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'x-refresh-token', 'x-user-role','x-verify-token'],
    optionsSuccessStatus: 204,
  };


function applyCors (){
    try {
        app.use(cors(corsOptions))

    } catch (error) {
        
    }
}

module.exports = applyCors