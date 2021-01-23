const express = require("express");
const Celebrity = require("./../models/celebrity");

const router = express.Router();

// Handle GET request for website root

//Iteration 2: Display all Celebrities
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("celebrities/index", { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

//Iteration 4: Add Celebrities
router.get("/create", (req, res, next) => {
  res.render("celebrities/create");
});

router.post("/", (req, res, next) => {
  const data = req.body;
  const celebrity = new Celebrity({
    name: data.name,
    occupation: data.occupation,
    catchPhrase: data.catchPhrase
  });
  celebrity
    .save()
    .then((celebrity) => {
      console.log("Celebrity created");
      res.redirect("celebrities");
    })
    .catch((error) => {
      next(error);
    });
});

//Iteration 3: Display single Celebrity

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then((celebrities) => {
      res.render("celebrities/show", { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

//Iteration 5: Delete Celebrity

//We don't have a Confirmation Page so no GET just the Post

/*
router.get('(:id/delete', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
  .then((celebrity) => {
    res.render ('celebrities/:id/delete' , { celebrities });
  })
  .cath(error => {
    next (error);
  });
});

*/

router.post("/:id/delete", (req, res, next) => {
  const id = req.params.id;
  Celebrity.findByIdAndRemove(id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
