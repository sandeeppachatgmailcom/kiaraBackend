const createClient = require("../../model/functions/users/createUser")
const sanitizeBody = require("../../utils/sanitizeBody")

const postCreateUser = async (req, res) => {

    try {
        const inputData = await sanitizeBody(req.body)
       // if (!inputData?.designation) inputData.designation = "DN10000009" 
       console.log(inputData,'input data')

        const result = await createClient(inputData)
        if (result) res.json({ status: true, message: 'success', ...result })
        else res.json({ status: false, message: 'failed' })

    } catch (error) {
        res.json({ status: false, message: 'failed', error })
    }
}

module.exports = postCreateUser