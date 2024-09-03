const NotMain = require("../models/not_mails.model");

const getAllNotMail = async (req, res) => {
  try {
    const response = await NotMain.findAll();
    return res.status(200).json({
      success: true,
      response,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "error while fetching the not_mails",
    });
  }
};

const createNotMail = async (req, res) => {
  try {
    const response = await NotMain.create(req.body);
    return res.status(200).json({
      success: true,
      response,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "error while creating not_mails",
    });
  }
};

module.exports = {
  getAllNotMail,
  createNotMail,
};
