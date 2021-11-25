
const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

router.get('/', async (req, res) => {
    let {actorname,directorname,moviename,year}=req.query;
    queryCond = {
        ...(actorname && {Actors:{$regex:actorname}}),
        ...(directorname && {Director:{$regex:directorname}}),
        ...(moviename && {Name:moviename}),
        ...(year && {Year:year})
    }
   try {
       const movies = await Movie.find(queryCond).select('Name Director Genre Year Rating Votes Revenue');
        res.json({
        data:movies
      });
       
   } catch (error) {
      return  res.status(400).json({message: error});
   }
});

router.delete('/',(req,res) =>{
    Movie.deleteMany({},(err,result) =>{
        if(err) return res.send(err);
        if(result){
            return res.send("All entries are deleted");
        }
    });
})

module.exports = router;
