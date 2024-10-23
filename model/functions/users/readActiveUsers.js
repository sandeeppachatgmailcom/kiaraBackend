const user = require('../../schema/user')

const readActiveUsers =async  (userType)=>{
    try {
        const result = await user.find({isActive:true,userType:userType,deleted:false})
        return { status:true,message:'success',data:result}
    } catch (error) {
        
    }
} 
module.exports = readActiveUsers