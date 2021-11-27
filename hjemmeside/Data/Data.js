var fs = require("fs");

const ABSOLUTE_PATH = __dirname + "/../../database";
const BRUGER_FIL = "/brugere.json";

class DB {
  constructor() {
    this.brugere = this.openFile(BRUGER_FIL);
  }
 
  saveFile(fileName, contentString) {
    fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
  }


  openFile(fileName) {
    const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
    return JSON.parse(file);
  }


  saveUser(bruger) {
    this.brugere.push(bruger);
    this.saveFile(BRUGER_FIL, JSON.stringify(this.brugere));
  }

  deleteUser(bruger) {
    this.brugere = this.brugere.filter((x) => x.email != bruger.email);
    this.saveFile(BRUGER_FIL, JSON.stringify(this.brugere));
  }

  findUser(bruger) {
    return this.brugere.find((x) => bruger.email == x.email);
  }
}

// Det her er en singleton -- laaangt over pensum, men et ret fedt term at fyre af
module.exports = new DB();