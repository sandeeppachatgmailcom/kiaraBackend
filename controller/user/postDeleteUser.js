const addToApiLog = require("../../model/functions/apiLog/addtoApiLog")
const deleteUser = require("../../model/functions/users/deleteUser")
const sanitizeBody = require("../../utils/sanitizeBody")

const postDeleteUser=async (req,res)=>{
    try {
        const data =await sanitizeBody(req.body)
        const result = await deleteUser(data.userId)
        await addToApiLog(result?.status,result?.message,req.path)
        if(result){
            res.json({...result})
        }
        else 
        return res.json({status:false,message:'action Failed '})
    } catch (error) {
        await addToApiLog(false,error,req?.path)
        res.json({status:false,message: error || 'action Failed '})
    }
}
module.exports = postDeleteUser