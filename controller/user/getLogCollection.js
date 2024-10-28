const apiLogCollection = require("../../model/schema/apiLog");

async function getLogCollection (req, res) {
    try {
      const statusCounts = await apiLogCollection.aggregate([
        { $group: { _id: "$activityStatus", count: { $sum: 1 } } }
      ]);
      res.json(statusCounts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching API log stats" });
    }
  }

  module.exports = getLogCollection