const express = require("express");

const router = express.Router();

const brugerModel = require("../model/Brugere");

const db = require("./../Data/Data"); 

router.post("/opret", (req, res) => {
    const bruger = new brugerModel(req.body.email, req.body.Adgangskode);

    db.saveUser(bruger);

    res.status(200).send(true);

  });//Her kan vi se hvordan man opretter en bruger

  router.post("/login", (req,res) => {

    const bruger = new brugerModel(req.body.email, req.body.Adgangskode);

    const found = db.findUser(bruger);

    if (found) {

      if(bruger.Adgangskode == found.Adgangskode){

        res.status(200).send(true);

      }else {

        res.status(401).send(false);
      }
    }else {

      res.status(404).send(false)
    }
});// her hvordan man logger ind og en if analyse ift hvad der sker hvis man ikke indtaster det rigtige 


router.post("/slet", (req, res) => {

  const bruger = new brugerModel(req.body.email, req.body.Adgangskode);
  
  db.deleteUser(bruger);

  res.status(200).send(true);
});


module.exports = router;