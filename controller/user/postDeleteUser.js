const deleteUser = require("../../model/functions/users/deleteUser")
const sanitizeBody = require("../../utils/sanitizeBody")

const postDeleteUser=async (req,res)=>{
    try {
        const data =await sanitizeBody(req.body)
        const result = await deleteUser(data.userId)
        if(result){
            res.json({...result})
        }
        else 
        return res.json({status:false,message:'action Failed '})
    } catch (error) {
        return res.json({status:false,message: error || 'action Failed '})
    }
}
module.exports = postDeleteUser