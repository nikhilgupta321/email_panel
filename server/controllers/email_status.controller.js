const EmailStatus = require("../models/emails_status.model");

const getEmail_status = async (req, res) => {
  try {
    const data = await EmailStatus.findAll();
    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "error while fetching the data",
    });
  }
};

const uploadEmailStatus = async (req, res) => {
  try {
    const { subject, mailtype, country, emailsfile ,email_count} = req.body;
    const date=new Date();
    if (!subject || !mailtype || !country || !emailsfile || !email_count) {
      return res.status(401).json({
        success: false,
        message: "info missing",
      });
    }
    const data={
        ...req.body,
        created_at:`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` 
    }
    const response=await EmailStatus.create(data);
    return res.status(200).json({
      success: true,
      message: "emailStatus created",
      response,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "error while creating emailStatus",
    });
  }
};

module.exports = {
  getEmail_status,
  uploadEmailStatus,
};
