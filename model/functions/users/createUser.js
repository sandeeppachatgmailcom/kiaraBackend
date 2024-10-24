const users = require("../../schema/user.js")
const getserialNumber = require("../../functions/serialNumbers/getSerialNumber.js")
const { encryptPassword } = require("../../../utils/encrypt.js")
 
const createClient =async  (data)=>{
    try {
         
        let { userId, firstname , designation, email, password, isAdmin, lastName, contact, userType, deleted, isActive  }  =   data  
        console.log(firstname ,  email  ,  userType,data,'firstname ,  email  ,  userTypefirstname ,  email  ,  userType')
        if( !firstname ||  !email || !userType ) return    {status:false,message:'requiered informations are missing  '}   
        if(!userId){
            const clients = await users.findOne({$or:[ {email:email},{contact:contact} ]})
            if(clients){
                return {status:false,message:'user already exist '}
            }
            else{
                userId = await getserialNumber('user')
                if (!userId)  return {status:false,message:'unique id generation failed   '} 
            }
            if(!isAdmin) {isAdmin = false;}
            deleted= false ;
            isActive = true;
            designation =  'DN10000005'
            password =await encryptPassword(password) || null
            if(!contact) contact = 'nil'
        }
         
        const newUser =  {userId, firstname , designation, email, password, isAdmin, lastName, contact , userType, deleted, isActive }
        
         const user =await  users.updateOne({userId:userId},{$set:newUser} , { upsert:true} ) 
         if( user.upsertedCount){
            return {status:true,message:'Clients registration successfull',...newUser}
        } 
        else if( user.modifiedCount){
            return {status:true,message:'Clients updation  successfull',...newUser}
        }
} catch (error) {
    
}

}

module.exports = createClient