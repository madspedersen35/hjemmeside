class Bruger {
  constructor(email, adgangskode) {
    this.email = email;
    this.adgangskode = adgangskode;
  }
}
  //Her har vi lavet en bruger model som vi kan bruge til at 
  // Vi kan nu hente denne fil i vores bruger kontrol og bruge det til at lave en ny profil 
  
  module.exports = Bruger;