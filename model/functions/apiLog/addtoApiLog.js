const apiLogCollection = require("../../schema/apiLog");
const getSerialNumber = require("../serialNumbers/getSerialNumber");

async function addToApiLog(activityStatus, activityMessage, apiPath,   ) {



    try {
        const activityId = await getSerialNumber('apilogs');

        const newLog = new apiLogCollection({
            activityStatus,
            activityId,
            activityMessage, 
        });

        await newLog.save();

    } catch (error) {
        console.error("Error adding log entry:", error);
    }
}

module.exports = addToApiLog;