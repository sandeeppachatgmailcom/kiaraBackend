const userLogin = require("../../model/functions/users/login")

const postuserLogin = async (req,res)=>{
    const {email,password} = req.body
    

    const result =  await userLogin(email,password)
    res.json(result)
}


module.exports = postuserLogin