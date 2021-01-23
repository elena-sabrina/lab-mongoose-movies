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

//Iteration 4: Add Celebrities
router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/create");
});

router.post("/celebrities/create", (req, res, next) => {
  const data = req.body;
  console.log(data);

  Celebrity.create({
    name: data.name,
    occupation: data.occupation,
    catchPhrase: data.catchPhrase
  })
    .then(() => {
      console.log("Celebrity created");
      res.render("celebrities/index");
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

//Iteration 5: Delete Celebrity

//We don't have a Confirmation Page so no GET just the Post
router.get("celebrities/:id/delete", (req, res, next) => {
  const id = req.params.id;
  Resource.findById(id)
    .then((resource) => {
      console.log("Found celebrity by ID");
      res.render("celebrities/test-delete-confirmation", {
        celebrities: celebrities
      });
    })
    .catch((error) => {
      next(error);
    });
});

/*
router.post("celebrities/:id/delete", (req, res, next) => {
  const id = req.params.id;
  Resource.findByIdAndRemove(id)
    .then(() => {
      console.log("router accessed has id");
      res.redirect("/");
    })
    .catch((error) => {
      next(error);
    });
});
*/

module.exports = router;
