document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();
  
      const email = document.getElementById("email").value;
      const Adgangskode = document.getElementById("Adgangskode").value;
  
      const bruger = {
        email: email,
        Adgangskode: Adgangskode,
      };
  
      fetch("http://localhost:2021/brugere/opret", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bruger),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            location.href = "/opret.html";
          }
        })
        .catch(() => {
          window.alert("Der opstod en fejl prøv igen senere");
        });
    });
  });
  