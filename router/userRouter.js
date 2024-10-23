
const express = require('express')
const error404 = require('../controller/error404')
const router = express.Router()
const postCreateUser = require('../controller/user/postCreateUser')
const { createToken } = require('../middleware/authentication')
const getActiveClients = require('../controller/user/getActiveUsers')


router.use('/createUser',createToken,postCreateUser)
router.get('/getActiveClients',getActiveClients)

// handling  undefined api endpoints 
router.use(error404)
module.exports =  router  