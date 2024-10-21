const serialNumber = require("../../schema/serialNumber");

const getserialNumber = async (collection) => {
    const result = await serialNumber.findOneAndUpdate({ collectionName: collection }, { $inc: { nextNumber: 1 } })
    if (result) {
        return result.prefix + result.nextNumber
    }
    else {
        return null
    }
}

module.exports = getserialNumber