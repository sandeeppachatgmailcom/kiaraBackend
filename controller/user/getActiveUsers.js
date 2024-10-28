const addToApiLog = require("../../model/functions/apiLog/addtoApiLog");
const readActiveUsers = require("../../model/functions/users/readActiveUsers");

const getActiveUsers = async (req, res) => {
  try {
    const data = await readActiveUsers("DN10000009");
   
    if (data ) {
     res.status(200).json({ status: true, ...data });
    } else {
      res.status(404).json({ status: false, message: "No active clients found" });
    }
  } catch (error) {
    await addToApiLog(false,error,req?.path)
    res.status(500).json({ status: false, message: "Internal Server Error", error: error.message });
  }
};

module.exports = getActiveUsers;
