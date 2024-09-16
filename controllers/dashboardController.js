const URL = require('../models/URL');

exports.getDashboardStats = async (req, res) => {
  try {
    const urlStats = await URL.aggregate([
      { $group: { _id: null, totalUrls: { $sum: 1 }, totalClicks: { $sum: "$clicks" } } }
    ]);
    res.json(urlStats[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
