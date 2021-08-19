import React,{useState,useEffect} from "react";
import {multipleFilesUpload} from '../data/api';

const FileUploadScreen=(props)=>{
    const [multipleFiles,setMultipleFiles] =useState('');
    const [title, setTitle] =  useState('');
    const MultipleFileChange=(e)=>{
        setMultipleFiles(e.target.files);
    }

    const UploadMultipleFiles=async()=>{
      const formData=new FormData();
      formData.append('title',title);
      for(let i=0;i<multipleFiles.length;i++){
          formData.append('files',multipleFiles[i]);
          
        }
        await multipleFilesUpload(formData);
        props.getMultiple();


        //console.log(multipleFiles);
    }
    return(
            <div>
            
                <div>
               
                    <div>
                        
                        <label>Tag</label><br/>
                        <input type="text" className="form-control" placeholder="Enter the title" onChange={(e) => setTitle(e.target.value) }/>
                        <br/><br/>
                    </div>
                </div>

                <div>
                    <div>
                        <label>Select files</label><br/>
                        <input type="file" className="form-control" onChange={(e)=>MultipleFileChange(e)} multiple/>
                    </div> 
                </div>
            
                <br/><br/>
                <button type="submit" onClick={()=>UploadMultipleFiles()}>Upload</button>
            
            </div>

    );
}
 export default FileUploadScreen;