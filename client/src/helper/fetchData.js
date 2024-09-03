import axios from "axios";

export const fetchData=async (url)=>{
    try{
        const response=await axios.get(url);
        if(response.data.success===true){
            return response.data;
        }
        else{
            return false;
        }
    }
    catch(err){
        console.log("error while fetching data ",err);
    }
}

