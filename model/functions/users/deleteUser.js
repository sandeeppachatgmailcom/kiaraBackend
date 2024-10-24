const userCollection = require("../../schema/user")

const deleteUser =async (userId)=>{
    try {
        const result = await userCollection.updateOne({userId,deleted:false},{$set:{deleted:true}})        
        if(result.modifiedCount ){
            return {status:true,message: 'user deleted ' }
        }
        else{
            return {status:false,message:'no user exist '}
        }
    } catch (error) {
        return {status:false,message:'Error'+error  }
    }
}

module.exports = deleteUser
