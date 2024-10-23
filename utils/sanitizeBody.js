// manual sanitization for input body 

const sanitizeInput = (input) => {
     return input.length? input?.replace(/[<>]/g, ''):input;
};

const sanitizeBody = async (dataObj) => {
    const temp = { }
    await Promise.all( Object.keys(dataObj).map((keys) => {
        temp[keys] = sanitizeInput(dataObj[keys])
    }))
    console.log('sanitized')
    console.log(temp,'sanitized')
    return temp
}

module.exports = sanitizeBody