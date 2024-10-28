
const express = require('express')
const error404 = require('../controller/error404')
const router = express.Router()
const postCreateUser = require('../controller/user/postCreateUser')
const { createToken } = require('../middleware/authentication')
const getActiveClients = require('../controller/user/getActiveClients')
const postturnUserOnOff = require('../controller/user/postturnUserOnOff')
const postDeleteUser = require('../controller/user/postDeleteUser')
const postuserLogin = require('../controller/user/postUserLogin')
const getActiveUsers = require('../controller/user/getActiveUsers')
const postActiveUserByClient = require('../controller/user/postActiveUserByClient')
const postActiveClientsByClient = require('../controller/user/a')


router.use('/createUser',createToken,postCreateUser)
router.get('/getActiveClients',getActiveClients)
router.post('/postActiveUserByClient',postActiveUserByClient)
router.post('/postActiveClientsByClient',postActiveClientsByClient)

router.get('/getActiveUsers',getActiveUsers)
router.post('/turnUserOnOff',postturnUserOnOff)
router.post('/deleteUser',postDeleteUser)
router.post('/login',postuserLogin)
  

// handling  undefined api endpoints 
router.use(error404)
module.exports =  router  