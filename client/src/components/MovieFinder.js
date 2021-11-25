import React, { Fragment,useEffect,useRef,useState} from 'react'
import MovieTable from './MovieTable';
import SearchForm from './SearchForm';

const MovieFinder = (props) =>{
    const [movies,setMovies] = useState([]);
    const actorNameInput = useRef();
    const directorNameInput = useRef();
    const movieNameInput = useRef();
    const dateInput = useRef();

    useEffect(async()=>{
        const controller = new AbortController();
             await fetch('http://localhost:4000/movies', {signal: controller.signal})
             .then(response => response.json())
             .then(res => {
                 if(res.data) {
                     setMovies(res.data);
                }
             }).catch(err =>{
                console.log(err.message);
              });
            
           return () => controller.abort();
    },[props.upload]);

    const onSubmit= async(e) =>{
        e.preventDefault();
        const enteredActor = actorNameInput.current.value;
        const enteredDirector = directorNameInput.current.value;
        const enteredMovie = movieNameInput.current.value;
        const enteredDate = dateInput.current.value;

        await fetch(`http://localhost:4000/movies?actorname=${enteredActor}&directorname=${enteredDirector}&moviename=${enteredMovie}&year=${enteredDate.substring(0,4)}`)
        .then(response => response.json())
        .then(res =>{
            if(res.data){
                setMovies(res.data);
            }
        })
        actorNameInput.current.value='';
        directorNameInput.current.value='';
        movieNameInput.current.value='';
        dateInput.current.value='';
    };
        const deleteMovies = async (e) =>{
            e.preventDefault();
            await fetch('http://localhost:4000/movies', { method: 'DELETE' })
            .then(response =>{
                setMovies([]);
            }).catch(err => {
                console.log(err);
            })
            ;
        }
    return (
    <Fragment>
           <div className="p-1 mt-3 text-primary">Movie Finder</div>
            <SearchForm onSubmit={onSubmit} 
            actorNameInput={actorNameInput} 
            directorNameInput={directorNameInput}
            movieNameInput={movieNameInput}
            dateInput={dateInput}
            />
           {movies.length === 0 &&  <div className="p-1 mt-3 text-primary">no movies</div>}
           {movies.length > 0 && <MovieTable movies = {movies}/>}
           {movies.length !== 0 && <button type="submit" onClick={deleteMovies} className="btn btn-danger btn-sm" >Delete</button>}
    </Fragment>
    );
};

export default MovieFinder;