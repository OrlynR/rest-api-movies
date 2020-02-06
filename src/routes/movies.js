const { Router } = require("express");
const router = Router();
const dbmovies = require("../../src/sample.json");
const _ = require("underscore");

router.get("/", (req, res, next) => {
  res.json(dbmovies);
});

router.post("/", (req, res, next) => {
  const { title, director, year, rating } = req.body;
  //console.log(req.body);
  if (title && director && year && rating) {
      const id = dbmovies.length + 1;
      const newMovie = {...req.body,id};
      dbmovies.push(newMovie);
    res.json(dbmovies);
  } else {
    res.status(500).json({error: 'no recibido'});
  }
});


router.put('/:id', (req,res) => {
    const{id }=req.params;
    const { title, director, year, rating } = req.body;
    if (title && director && year && rating){
        _.each(dbmovies, (movie,i) => { 
            if(movie.id == id){
                movie.title = title;
                movie.director =director;
                movie.year = year;
                movie.rating = rating;
            }
        });
          res.json(dbmovies);
        } else {
            res.status(500).json({error: 'no recibido'});
        }
    
} )

router.delete('/:id', (req,res) =>  {
    const { id } = req.params;
    _.each(dbmovies, (movie,i) => {
        if (movie.id == id) {
            dbmovies.splice(i,1);
        }
        
    } )
    res.send(dbmovies);
})

module.exports = router;
