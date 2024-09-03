const EmailFiles = require("../models/email_files.model");

const getEmailFiles = async (req, res) => {
  try {
    const response = await EmailFiles.findAll();
    if (!response) {
      return res.status(402).json({
        success: false,
        message: "data not present",
      });
    }
    return res.status(200).json({
      success: true,
      response,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "error while fetching the data",
    });
  }
};

const createEmailFiles = async (req, res) => {
  try {
    const { country, state, file } = req.body;
    if (!country && !state && !file) {
      return res.status(401).json({
        success: false,
        message: "missing input info",
      });
    }
    const response = await EmailFiles.create(req.body);
    return res.status(200).json({
      success: true,
      response,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "error while create email_fiels",
    });
  }
};

module.exports = {
  getEmailFiles,
  createEmailFiles,
};
