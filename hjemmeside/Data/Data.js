const fs = require("fs");// Her benyttes fs til at lave et lokalt biblotek der sørger for vi kan gemme tekst/fil 

// vi skal bruge vores brugere fra vores brugere.json vi definere derfor en path til hvor
// computeren kan finde filen

const ABSOLUTE_PATH = "/../../Database";
const BRUGER_FILE = "/brugere.json";


class DB {
    constructor(){
        this.brugere = this.openFile();//vi laver en variabel af vores json fil, hvilket gør vi kan gemme vores liste med brugere 
    }
    
    saveFile(){
        fs.writeFileSync(ABSOLUTE_PATH + BRUGER_FILE, this.brugere);//Så vi kan gemme vores bruger i vores database 
    }
// vores funktion er synkron, det vil sige vi venter til den er færdig
    openFile(){
        const file = fs.readFileSync(ABSOLUTE_PATH + BRUGER_FILE);
        return JSON.parse(file); // Dette gøres så filen kommer som json og ikke som string

    }
    saveUser(bruger){
        this.brugere.push(bruger);
        this.saveFile();
    }
}
module.exports = new DB();