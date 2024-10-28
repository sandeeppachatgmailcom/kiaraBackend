const apiLogCollection = require("../../schema/apiLog");
const getSerialNumber = require("../serialNumbers/getSerialNumber");

async function addToApiLog(activityStatus,
    activityMessage,
    apiPath,
    errorMessage,
    errorDetails,
    userId,
    clientId,
    ipAddress,
) {



    try {
        const activityId = await getSerialNumber('apilogs');

        const newLog = new apiLogCollection({
            activityId,
            activityMessage,
            apiPath,
            errorMessage,
            errorDetails,
            userId,
            clientId,
            ipAddress,
        });

        await newLog.save();

    } catch (error) {
        console.error("Error adding log entry:", error);
    }
}

module.exports = addToApiLog;