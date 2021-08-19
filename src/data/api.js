import axios from 'axios';

const apiUrl='http://localhost:3000/api/';

export const multipleFilesUpload =async(data)=>{
    try{
        await axios.post(apiUrl + "multipleFiles",data);
    }
    catch(error){
        throw error;
    }
}

export const getMultipleFiles =async()=>{
    try{
        const {data}=await axios.get(apiUrl + "getMultipleFiles");
        return data;
    }
    catch(error){
        throw error;
    }
}


