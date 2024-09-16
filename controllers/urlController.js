const URL = require('../models/URL');
const crypto = require('crypto');

exports.createURL = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const shortId = crypto.randomBytes(6).toString('hex');
    const newURL = new URL({ originalUrl, shortId });
    await newURL.save();
    res.status(201).json({ shortUrl: `http://short.url/${shortId}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllURLs = async (req, res) => {
  try {
    const urls = await URL.find();
    res.json(urls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
