import React,{useEffect,useState} from 'react';
import './App.css';
import FileUploadScreen from './screen/uploadscreen'
import {getMultipleFiles} from "./data/api"

function App() {

  const [multipleFiles,setMultipleFiles]=useState([]);



  const getMultipleFilesList = async () => {
    try {
        const fileslist = await getMultipleFiles();
        setMultipleFiles(fileslist);
        console.log(multipleFiles);
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {
    getMultipleFilesList();
  }, []);
  return (
    <>
    <div className="container">
      <h1 className="title">MULTIPLE FILE UPLOADER</h1>
      <FileUploadScreen getMultiple={() => getMultipleFilesList()}/>
    </div>

    <div className="text">
    
             <h3 >Multiple Files List</h3>
             {multipleFiles.map((element, index) =>
                <div key={element._id}>
                    <h4>{element.title}</h4>
                    <div className="row">
                      {element.files.map((file, index) =>
                        <div>
                            <div>
                            
                              <img src={`http://localhost:3000/${file.filePath}`}   alt="img"/>
                              </div>
                          </div>
                         )}
                         </div>
                   </div>
                 )}
              </div>
     </>

  
    
   
  );
}

export default App;
