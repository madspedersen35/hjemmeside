document.addEventListener("DOMContentLoaded", (event) => {
    const bruger = localStorage.getItem("bruger");
    if (!bruger) {
      location.href = "/slet.html";
    }
  
    document.getElementById("delete").addEventListener("submit", (event) => {
      event.preventDefault();
  
      const bruger = JSON.parse(localStorage.getItem("bruger"));
  
      fetch("http://localhost:2021/brugere/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bruger),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            localStorage.removeItem("bruger");
            location.href = "/slet.html";
          }
        })
        .catch(() => {
          window.alert("Der opstod en fejl prøv igen senere");
        });
    });
  });
  