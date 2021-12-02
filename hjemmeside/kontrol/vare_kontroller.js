const express= require("express");

const router = express.Router();

const vareModel = require("../model/vare");

const DBVARE = require("../Data/vare_data")


router.post('/opret_vare', (req,res) =>{
    const vare = new vareModel(req.body.kategori, req.body.billede, req.body.pris);
    DBVARE.saveVare(vare);
    res.status(200).send(true);
} );

router.delete("/sletvare",(req,res) => {
    const vare = new vareModel(req.body.kategori, req.body.billede, req.body.pris);
    DBVARE.deleteVare(vare);
    res.status(200).send(true);
});
module.exports = router;