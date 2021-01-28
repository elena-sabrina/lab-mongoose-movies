const express = require("express");
const Movie = require("../models/movie");

const router = express.Router();

// Handle GET request for website root

//Iteration 8: Listing Our Movies
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
