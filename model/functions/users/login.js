 
const designationCollection = require("../../schema/designation")
const bcrypt = require('bcrypt') 
const userCollection = require("../../schema/user")


const userLogin =async(email,password)=>{
    const result = await userCollection.findOne({email:email})
    if(result){
        const validate = await bcrypt.compare(password,result.password)
        result.password = null
         
        if(validate==true){
            let temp =  JSON.parse(JSON.stringify(result)) 
            const designation =await designationCollection.findOne({designationId:temp.designation})
            return {status:true,message:'result success',...temp ,menuList:{...JSON.parse(JSON.stringify(designation))?.access }  }
        }
        else return {status:false,message:'wrong credentials '}
    }
    else{
         return {status:false,message:'user does not exist'}
    }
        
}

module.exports = userLogin