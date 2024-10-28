const addToApiLog = require("../../model/functions/apiLog/addtoApiLog")
const userLogin = require("../../model/functions/users/login")

const postuserLogin = async (req,res)=>{
    const {email,password} = req.body
    

    const result =  await userLogin(email,password)
    await addToApiLog(result?.status,result?.message,req.path)
    res.json(result)
}


module.exports = postuserLogin