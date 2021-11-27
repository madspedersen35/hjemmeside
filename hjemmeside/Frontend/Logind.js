document.addEventListener("DOMContentLoaded", (event) => {
  const bruger = localStorage.getItem("bruger");
  if (bruger) {
    location.href = "/";
  }

  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const Adgangskode = document.getElementById("Adgangskode").value;

    const bruger = {
      email: email,
      Adgangskode: Adgangskode,
    };

    fetch("http://localhost:2021/brugere/logind", {
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
          location.href = "/";
        } else {
          window.alert("De indtastede oplysninger er forkerte, prøv igen");
        }
      })
      .catch(() => {
        window.alert("Der opstod en fejl, prøv igen");
      });
  });
});