const express=require("express");
const router=express.Router();
const emailStatusController=require('../controllers/email_status.controller')

router.get('/emailStatus',emailStatusController.getEmail_status)
router.post('/emailStatus',emailStatusController.uploadEmailStatus)

module.exports=router;