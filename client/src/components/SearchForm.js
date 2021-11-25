import React from 'react'

const SearchForm = (props) => {

    return(
       <form className=" mt-2" onSubmit={props.onSubmit}>
                <div className='form-inline row'>
                    <div className='form-group col-sm-3 col-md-2 m-1'>
                    <input type='text' placeholder='Actor Name' className='form-control' ref={props.actorNameInput} />
                    </div>
                    <div className='form-group col-sm-2  col-md-2 m-1'>
                    <input type='text' placeholder='Director Name' className='form-control' ref={props.directorNameInput} />
                    </div>
                    <div className='form-group col-sm-2 col-md-2 m-1'>
                        <input type='text' placeholder='Movie Name' className='form-control' ref={props.movieNameInput} />
                    </div>
                    <div className='form-group col-sm-2 col-md-2 m-1'> 
                        <input type="date"  className='form-control' ref={props.dateInput}/>
                    </div>
                    <div className='form-group col-sm-2 col-md-2 m-1'>
                        <button type='submit' className="btn btn-dark" >Search</button>
                    </div>
                </div>
        </form>
        );
    };
    
    export default SearchForm;