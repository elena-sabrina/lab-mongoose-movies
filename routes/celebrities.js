const express = require("express");
const Celebrity = require("./../models/celebrity");

const router = express.Router();

// Handle GET request for website root

//Iteration 1: Display all Celebrities
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("celebrities/index", { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

//Iteration 2: Display single Celebrity

/*
router.post("/celebrities", (req, res, next) => {
  const data = req.body;

  Celebrity.create({
    name: data.name,
    occupation: data.occupation,
    catchPhrase: data.catchPhrase
  })
    .then((celebrity) => {
      res.render("index/${celebrities._id}");
    })
    .catch((error) => {
      res.render("error");
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  const id = req.params.id;
  Resource.findById(id)
    .then((resource) => {
      res.render("celebrity/single", { celebrity: celebrity });
    })
    .catch((error) => {
      res.render("error");
    });
});
*/

module.exports = router;
