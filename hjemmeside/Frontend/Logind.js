document.addEventListener("DOMContentLoaded", (event) => {
  const bruger = localStorage.getItem("bruger");
  if (bruger){
    location.href ="/home.html"
  }
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const adgangskode = document.getElementById("adgangskode").value;

    const bruger = {
      email: email,
      adgangskode: adgangskode,
    };

    fetch("http://localhost:4444/brugere/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bruger),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {

          localStorage.setItem("bruger", JSON.stringify(bruger));
          location.href = "/home.html";
        } else {
          window.alert("De indtastede oplysninger er forkerte, prøv igen");
        }
      })
      .catch(() => {
        window.alert("Der opstod en fejl, prøv igen");
      });
  });
});