import axios from "axios";

export const postData=async (url,data)=>{
    try{ 
        const response=await axios.post(url,data);
        return response;
    }
    catch(err){
        console.log("error while posting data ",err);
        return false;
    }
}

