
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
const postActiveClientsByClient = require('../controller/user/postActiveClientsByClient')
const postPanApiresult = require('../controller/user/postPanApiresult')
const getLogCollection = require('../controller/user/getLogCollection')
 


router.use('/createUser',createToken,postCreateUser)
router.get('/getActiveClients',getActiveClients)
router.post('/postActiveUserByClient',postActiveUserByClient)
router.post('/postActiveClientsByClient',postActiveClientsByClient)
router.post('/postPanApiresult',postPanApiresult)
router.get('/getActiveUsers',getActiveUsers)
router.post('/turnUserOnOff',postturnUserOnOff)
router.post('/deleteUser',postDeleteUser)
router.post('/login',postuserLogin)  
router.get('/log-stats',getLogCollection );

module.exports = router;






// handling  undefined api endpoints 
router.use(error404)
module.exports =  router  