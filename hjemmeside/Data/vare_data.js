var fs = require("fs");

const ABSOLUTE_PATH_VARE = __dirname + "/../../database";
const VARE_FIL = "/vare.json";

class DBVARE {
    constructor() {
      this.varer = this.openFile(VARE_FIL);
    }
 
    saveFile(fileName, contentString) {
        fs.writeFileSync(ABSOLUTE_PATH_VARE + fileName, contentString);
        
      }
    
    
      openFile(fileName) {
        const file = fs.readFileSync(ABSOLUTE_PATH_VARE + fileName);
        return JSON.parse(file);
      }
    
    
      saveVare(vare) {
        this.varer.push(vare);
        this.saveFile(VARE_FIL, JSON.stringify(this.vare));
      }
    
      deleteVare(vare) {
        this.varer = this.varer.filter((x) => x.kategori != vare.kategori);
        this.saveFile(VARE_FIL, JSON.stringify(this.varer));
      }
    
      findVare(vare) {
        return this.varer.find((x) => vare.kategori == x.kategori);
      }
    }

module.exports= new DBVARE();

