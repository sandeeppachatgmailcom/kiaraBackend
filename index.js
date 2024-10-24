const express = require('express')
const mainRouter = require('./router/mainRouter')
const app = express()
const http = require('http');
const mongoose = require('./model/database/mongoDb')
const { Server } = require('socket.io');
const cors = require('cors'); 
const socketHandler = require('./socketServer/socketio');

const server = http.createServer(app);
const corsOptions = {
    origin:'*',
    credentials: true,
    methods: ['GET', 'PATCH', 'PUT', 'POST','DELETE'],
    allowedHeaders: ['Origin','Access-Control-Allow-Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'x-refresh-token', 'x-user-role','x-verify-token'],
    optionsSuccessStatus: 204,
  };
  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });
  socketHandler(io);
  


app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
 
app.use('/',mainRouter)



server.listen(5000,()=>{
    mongoose.intialise()
    console.log('server connected on port 5000')
})

module.exports = {server}