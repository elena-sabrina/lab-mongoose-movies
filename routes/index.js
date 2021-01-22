const express = require("express");
const Celebrity = require("./../models/celebrity");

const router = express.Router();

// Handle GET request for website root
router.get('/celebrities', (req, res, next) => {
  res.render('celebrities/index');
});

router.post("/celebrities", (req, res, next) => {
  const data = req.body;

  Celebrity.create({
    name: data.name,
    occupation: data.occupation,
    catchPhrase: data.catchPhrase
  })
  .then(celebrity => {
    res.render('/celebrities/${celebrities._id}');
  })
  .catch(error => {
    res.render('error)';
  });
});

module.exports = router;
