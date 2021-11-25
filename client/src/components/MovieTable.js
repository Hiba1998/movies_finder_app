import React from 'react'

const MovieTable = (props) => {
    return(
        <div className=" table-responsive  mt-5">
            <table className="table table-bordered table-sm ">
            <thead>
                <tr>
                <th scope="col">Movie Name</th>
                <th scope="col">Director</th>
                <th scope="col">Genre</th>
                <th scope="col">Release Date</th>
                <th scope="col">Rating</th>
                <th scope="col">Votes</th>
                <th scope="col">Revenue</th>
                </tr>
            </thead>
            <tbody>
                {props.movies.map(movie =>(<tr key={movie._id}>
                  <td>{movie.Name}</td>
                  <td>{movie.Director}</td>
                  <td>{movie.Genre}</td>
                  <td>{movie.Year}</td>
                  <td>{movie.Rating}</td>
                  <td>{movie.Votes}</td>
                  <td>{movie.Revenue}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
};

export default MovieTable;