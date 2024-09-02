const Links=require('../models/links.model.js');

const getAllLinks=async (req,res)=>{
    try {
        const response=await Links.findAll();
        if(!response){
            return res.status(401).json({
                success:false,
                message:"no data present",
            })
        }
        return res.status(200).json({
            success:true,
            response
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"error while fetching the data",
            error
        })
    }
}

module.exports={
    getAllLinks,
}