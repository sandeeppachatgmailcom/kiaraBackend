const addToApiLog = require("../../model/functions/apiLog/addtoApiLog")
const createClient = require("../../model/functions/users/createUser")
const sanitizeBody = require("../../utils/sanitizeBody")

const postCreateUser = async (req, res) => {

    try {
        const inputData = await sanitizeBody(req.body)
       // if (!inputData?.designation) inputData.designation = "DN10000009" 
       console.log(inputData,'input data')

        const result = await createClient(inputData)
        await addToApiLog(result?.status,result?.message,req.path)
        if (result) res.json({ status: true, message: 'success', ...result })
        else res.json({ status: false, message: 'failed' })

    } catch (error) {
        await addToApiLog(false,error,req?.path)
        res.json({ status: false, message: 'failed', error })
    }
}

module.exports = postCreateUser