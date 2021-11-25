
const mongoose = require('mongoose');

const MoviesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: {type: String},
    Genre: {type: String},
    Description: {type: String},
    Director: {type:String},
    Actors: {type:String},
    Year: {type:Number},
    Runtime: {type:Number},
    Rating: {type:Number},
    Votes: {type:Number},
    Revenue:{type:Number},
    Metascore:{type:Number}
});

module.exports = mongoose.model('Movies', MoviesSchema, 'Movies');
