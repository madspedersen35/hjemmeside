document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const adgangskode= document.getElementById("adgangskode").value;

    const bruger = {
      email: email,
      adgangskode: adgangskode,
    };

    fetch("http://localhost:5555/brugere/opret", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bruger),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          location.href = "/logind.html";
        }
      })
      .catch(() => {
        window.alert("Der opstod en fejl");
      });
  });
});
