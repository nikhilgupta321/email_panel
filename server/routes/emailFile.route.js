const express=require('express');
const router=express.Router();
const emailFileController=require('../controllers/emailFile.controller');

router.get('/emailFiles',emailFileController.getEmailFiles);
router.post('/emailFiles',emailFileController.createEmailFiles);

module.exports=router;