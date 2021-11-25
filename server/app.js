const express = require('express');
const fileUpload = require('express-fileupload');
const Movie = require('./models/Movie');
const csvtojson = require("csvtojson");
const mongoose = require('mongoose');
const cors = require('cors');

// connect to db

const uri = "mongodb+srv://HibaAlgoTraders:test123@cluster0.gy5hr.mongodb.net/AlgoTraders?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true});
var db = mongoose.connection;
if (!db) {
  console.log('Error connected to db');
} else {
  console.log('Connected to db');
}

const app = express();
app.use(cors());
app.use(fileUpload());
// routes
app.get('/', (req, res) => {
  res.send("Hi Hiba !");
});

app.post('/upload',(req,res) =>{
  if(req.files === null) {
    return res.status(400).json({msg:'No file uploaded'});
  }
  const file = req.files.file;
  file.mv(`${__dirname}/${file.name}`, err => {
    if(err) {
      return res.status(500).send(err);
    }
  });
  csvtojson()
  .fromFile(file.name)
  .then(csvData => {
    Movie.insertMany(csvData,(err,result) =>{
       if(err) return res.send(err);
       if(result){
           console.log("import CSV into database ");
           return res.send("Import CSV into Database successfully")
       }
   });
});

});
const moviesRoute = require('./routes/movies');
app.use('/movies', moviesRoute);

// how to we start listening to the server
app.listen(4000);