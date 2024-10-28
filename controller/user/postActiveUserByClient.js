const readActiveUserByClient = require("../../model/functions/users/readActiveUserByClient")
const sanitizeBody = require("../../utils/sanitizeBody")

const postActiveUserByClient =async (req,res)=>{
    try {
        const data = await sanitizeBody(req.body)
            console.log(data,'test data ')

        const result = await readActiveUserByClient('DN10000009',data.clientId) 
        if (result){
            res.json(result)
        }
        else res.json({status:false,message:'unknown error'})
    } catch (error) {
        res.json({status:false,message:error})
    }
}


module.exports = postActiveUserByClient