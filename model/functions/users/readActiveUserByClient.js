const user = require('../../schema/user')

const readActiveUserByClient =async  (userType,clientID)=>{
    try {
        const result = await user.find({ designation:userType,reportingHead:clientID||'data',deleted:false})
        if (result) return { status:true,message:'success',data:result}
        else return {status:true,message:'no data ',data:[]}
    } catch (error) {
        return {status:false,message:error,data:[]}
    }
} 
module.exports = readActiveUserByClient