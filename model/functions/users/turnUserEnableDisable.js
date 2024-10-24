const userCollection = require("../../schema/user")

const turnUserEnableDisable =async (userId)=>{
    try {
        const user = await userCollection.findOne({ userId });
        const result = await userCollection.updateOne({userId,deleted:false},{$set:{isActive:!user.isActive}})        
        if(result.modifiedCount ){
            return {status:true,message:user.isActive? 'user disabled ':'user enabled '}
        }
        else{
            return {status:false,message:'no user exist '}
        }
    } catch (error) {
        return {status:false,message:'Error'+error  }
    }
}

module.exports = turnUserEnableDisable
