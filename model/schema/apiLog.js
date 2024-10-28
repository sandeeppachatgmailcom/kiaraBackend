const mongoose = require('mongoose');

const apiLogSchema = new mongoose.Schema({
    activityId: { type: String, unique: true },
    activityStatus: { type: Boolean },
    activityMessage: { type: String },
    apiPath: { type: String }, 
    errorMessage: { type: String },
    errorDetails: { type: String }, 
    requestTimestamp: { type: Date, default: Date.now },
    responseTimestamp: { type: Date }, 
    userId: { type: String },
    clientId: { type: String }, 
    ipAddress: { type: String }, 
     
});

const apiLogCollection = mongoose.model('apiLog', apiLogSchema);

module.exports = apiLogCollection;