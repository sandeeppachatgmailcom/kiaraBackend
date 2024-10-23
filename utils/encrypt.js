
const bcrypt = require('bcrypt')

const encryptPassword = async (hashValue)=>{
    try {
        const hashedPassword =await bcrypt.hash(hashValue, 10)
        return hashedPassword
    } catch (error) {
        return null
    }
}

module.exports = {encryptPassword}