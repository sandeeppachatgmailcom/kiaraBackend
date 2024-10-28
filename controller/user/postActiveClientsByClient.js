const addToApiLog = require("../../model/functions/apiLog/addtoApiLog")
const readActiveUserByClient = require("../../model/functions/users/readActiveUserByClient")
const sanitizeBody = require("../../utils/sanitizeBody")

const postActiveClientsByClient =async (req,res)=>{
    try {
        const data = await sanitizeBody(req.body)
            console.log(data,'test data ')

        const result = await readActiveUserByClient('DN10000008',data.clientId) 
        await addToApiLog(result?.status,result?.message,req.path)
        if (result){
            
            res.json(result)
        }
        else res.json({status:false,message:'unknown error'})
    } catch (error) {
        await addToApiLog(false,error,req?.path)
        res.json({status:false,message:error})
    }
}


module.exports = postActiveClientsByClient