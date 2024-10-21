
const express = require('express')
const error404 = require('../controller/error404')
const router = express.Router()


router.get('/',(req,res)=>{
    res.json({message:'success'})
})
router.post('/',(req,res)=>{
    console.log(req.body,'req.body')
    res.json({message:'client'})
})


// handling  undefined api endpoints 
router.use(error404)
module.exports =  router  