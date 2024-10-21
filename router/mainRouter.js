const express = require('express')
const router = express.Router()
const adminRouter =  require( './adminRouter')
const clientRouter =  require( './clientRouter')
const userRouter =  require( './userRouter')
const error404 = require('../controller/error404')
const swaggerDocs = require('../documentation/swagger')
const swaggerUi = require('swagger-ui-express');

// handling  swagger documentation 
router.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocs))


// handling custom routes  
router.use('/admin',adminRouter)
router.use('/client',clientRouter)
router.use('/user',userRouter)


// handling  undefined api endpoints 
router.use(error404)



module.exports = router 
//module.exports = {allRoutes}