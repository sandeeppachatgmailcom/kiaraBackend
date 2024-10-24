
const express = require('express')
const error404 = require('../controller/error404')
const router = express.Router()
const postCreateUser = require('../controller/user/postCreateUser')
const { createToken } = require('../middleware/authentication')
const getActiveClients = require('../controller/user/getActiveUsers')
const postturnUserOnOff = require('../controller/user/postturnUserOnOff')
const postDeleteUser = require('../controller/user/postDeleteUser')


router.use('/createUser',createToken,postCreateUser)
router.get('/getActiveClients',getActiveClients)
router.post('/turnUserOnOff',postturnUserOnOff)
router.post('/deleteUser',postDeleteUser)
 

// handling  undefined api endpoints 
router.use(error404)
module.exports =  router  