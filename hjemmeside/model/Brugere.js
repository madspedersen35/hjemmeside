class User {
    constructor(email, password) {
      this.password = password;
      this.email = email;
    }
  }
  //Her har vi lavet en bruger model som vi kan bruge til at 
  // Vi kan nu hente denne fil i vores bruger kontrol og bruge det til at lave en ny profil 
  
  module.exports = User;