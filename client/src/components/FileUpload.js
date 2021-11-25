import axios from 'axios';
import React,{Fragment, useState} from 'react'
import MovieFinder from './MovieFinder';

const FileUpload = () =>{
const [file,setFile] = useState('');
const [upload,setUpload] = useState('');
const [loading,setLoading] = useState(true);
const onChange = e =>{
    setFile(e.target.files[0]);
};
const onSubmit = async e =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('file',file);

    try {
        const res = await axios.post('http://localhost:4000/upload',formData, {
            headers: {
                    'Content-Type': 'multipart/form-data'
                }
        });
        console.log(res.data);
        setLoading(false);
        setUpload(res.data);

    } catch(err) {
        if(err.response.status === 500) {
            console.log('There was a problem with the server');
        }else {
            console.log(err.response.data.msg);
        }
    }

}
    return(
        <Fragment>
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="file" className="form-control" onChange={onChange}/>
                    <button className="btn btn-primary" type="submit"  value="Upload">Upload</button>
                </div>
            </form>
           {!loading && <MovieFinder upload={upload} />}
        </Fragment>
    );
};

export default FileUpload;