import { React, useState } from "react";
import Axios from "axios";


const Uploadcsv = () => {
    const [file, setFile]=useState(null)
    
    const upload=(e)=>{
        e.preventDefault()
        console.log("test")
        let formData=new FormData();
        formData.append("file_csv",file);
        console.log("data from file", formData)
        Axios.post("http://localhost:9000/api/uploadfile", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((res) => {
            console.log("Success ", res);
            });
        
            // Axios.get("http://localhost:9000/api/").then((res) => {
            //   setFile("hello mario",res.data);
            //   console.log(res.data);
            // });
    }

    return (
        <div id="app-layout-body" class="container-fluid body-content">
            <div class="row">         
                <div id="div-register" class="col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                    <label class="form-label" for="customFile">CSV input</label>
                    <input type="file" name="file_csv" class="form-control" id="customFile" onChange={(e)=>{setFile(e.target.files[0])}}/>
                    <button onClick={(e)=>upload(e)}>Submit</button>
                </div>
            </div>
        </div>     
    );
}

export default Uploadcsv ;