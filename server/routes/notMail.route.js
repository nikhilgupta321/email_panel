const express=require('express');
const router=express.Router();
const notMailController=require('../controllers/notMain.controller');

router.get('/getNotMails',notMailController.getAllNotMail);
router.post('/createNotMail',notMailController.createNotMail);

module.exports=router;