const error404 =async (req,res)=>{
    await addToApiLog(false,'not a valid api',req?.path)
    res.json({status:false,message:'not a valid api'})
}

module.exports  = error404