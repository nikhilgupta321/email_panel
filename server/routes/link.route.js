const exprss=require("express");
const router=exprss.Router();
const linkController=require('../controllers/link.controller');

router.get('/getlinks',
    linkController.getAllLinks    
);

router.get('/test',(req,res)=>{
    console.log("working");
    return res.status(200).json({
        message:"working links",
    })
})

module.exports=router;