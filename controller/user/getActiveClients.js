const readActiveUsers = require("../../model/functions/users/readActiveUsers");

const getActiveClients = async (req, res) => {
  try {
    const data = await readActiveUsers("DN10000008");
    if (data ) {
     res.status(200).json({ status: true, ...data });
    } else {
      res.status(404).json({ status: false, message: "No active clients found" });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error", error: error.message });
  }
};

module.exports = getActiveClients;
