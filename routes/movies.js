const express = require('express');
const Movie = require('./../models/movie');

const router = express.Router();

// Handle GET request for website root

//Iteration 8: Listing Our Movies

router.get('/', (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render('movies/index', { movies });
    })
    .catch((error) => {
      next(error);
    });
});

//Iteration 10: Adding New Movies
router.get('/create', (req, res, next) => {
  res.render('movies/create');
});

router.post('/', (req, res, next) => {
  const data = req.body;
  const movie = new Movie({
    title: data.title,
    genre: data.genre,
    plot: data.plot
  });
  movie
    .save()
    .then((movie) => {
      console.log('Movie created');
      res.redirect('movies');
    })
    .catch((error) => {
      next(error);
    });
});

//Iteration 9: The Movie Details Page

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
    .then((movies) => {
      res.render('movies/show', { movies });
    })
    .catch((error) => {
      next(error);
    });
});

//Iteration 11: Deleting Movies

router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Movie.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/movies');
    })
    .catch((error) => {
      next(error);
    });
});

//Iteration 12 (Bonus):Editing Movies

router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
    .then((movies) => {
      res.render('movies/edit', { movies });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id', (req, res, next) => {
  const id = req.params.id;
  const title = req.body.title;
  const genre = req.body.genre;
  const plot = req.body.plot;
  Movie.findByIdAndUpdate(id, { title, genre, plot })
    .then((movies) => {
      console.log('Movie edited');
      res.redirect('/movies');
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
