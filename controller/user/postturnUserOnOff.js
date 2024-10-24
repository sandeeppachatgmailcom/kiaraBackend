const turnUserEnableDisable = require("../../model/functions/users/turnUserEnableDisable")
const sanitizeBody = require("../../utils/sanitizeBody")


const postturnUserOnOff =async (req,res)=>{
    try {
        const data =await sanitizeBody(req.body)
        const result = await turnUserEnableDisable(data.userId)
        res.json({result})

    } catch (error) {
        
    }
}

module.exports = postturnUserOnOff