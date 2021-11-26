const { json } = require("express");
const fs = require("fs");// Her benyttes fs til at lave et lokalt biblotek der sørger for vi kan gemme tekst/fil 
const User = require("../model/Brugere");

// vi skal bruge vores brugere fra vores brugere.json vi definere derfor en path til hvor
// computeren kan finde filen

const ABSOLUTE_PATH = __dirname + "/../../Database";
const BRUGER_FILE = "/brugere.json";


class DB {
    constructor(){
        this.brugere = this.openFile(BRUGER_FILE);//vi laver en variabel af vores json fil, hvilket gør vi kan gemme vores liste med brugere 
    }
    
    saveFile(filNavn, contentString){
        fs.writeFileSync(ABSOLUTE_PATH + filNavn, contentString);//Så vi kan gemme vores bruger i vores database 
    }
// vores funktion er synkron, det vil sige vi venter til den er færdig
    openFile(filNavn){
        const file = fs.readFileSync(ABSOLUTE_PATH + filNavn);
        return JSON.parse(file); // Dette gøres så filen kommer som json og ikke som string

    }
    saveUser(bruger){
        this.brugere.push(bruger);
        this.saveFile(BRUGER_FILE, JSON.stringify(this.brugere));
    }
    deleteUser(bruger) {
        this.brugere = this.brugere.filter((x) => x.email != bruger.email);
        this.saveFile(BRUGER_FILE, JSON.stringify(this.brugere));
    }
    findUser(bruger) {
        return this.brugere.find((x) => bruger.email == x.email);
    }
}

module.exports = new DB(); //singleton find på nettet og skriv 