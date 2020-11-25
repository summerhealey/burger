const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req,res) => {
  burger.insertOne(req.body.name,(result) => {
      res.status(200).end();
  });
});

router.put("/api/burgers/:id", (req,res) => {
  burger.updateOne(req.params.id, (result) => {
      if(result.changedRows == 0){ // ID doesn't exist
          return res.status(404).end();
      } else{
          res.status(200).end();
      }
  });
});

// Export routes for server.js to use.
module.exports = router;
