const addToApiLog = require("../../model/functions/apiLog/addtoApiLog")
const turnUserEnableDisable = require("../../model/functions/users/turnUserEnableDisable")
const sanitizeBody = require("../../utils/sanitizeBody")


const postturnUserOnOff =async (req,res)=>{
    try {
        const data =await sanitizeBody(req.body)
        const result = await turnUserEnableDisable(data.userId)
        
        await addToApiLog(result?.status, result?.message, req.path,  )
        res.json({result})

    } catch (error) {
        await addToApiLog(false,error,req?.path)
        res.json({status:false,message:error})
    }
}

module.exports = postturnUserOnOff