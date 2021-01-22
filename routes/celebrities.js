const express = require("express");
const Celebrity = require("./../models/celebrity");

const router = express.Router();

// Handle GET request for website root

//Iteration 2: Display all Celebrities
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("celebrities/index", { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

//Iteration 3: Display single Celebrity

router.get("/celebrities/:id", (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then((celebrities) => {
      res.render("celebrities/show", { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});


//Iteration 4: Add Celebrities
router.get("/celebrities/create", (req, res, next) => {
    res.render('celebrities/create');
});

/*
router.post("/celebrities/create", (req, res, next) => {
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
*/
module.exports = router;
