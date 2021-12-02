document.addEventListener("DOMContentLoaded", (event) => {
    const bruger = localStorage.getItem("bruger");
    if (!bruger) {
      location.href = "/logind.html";
    }
  
    document.getElementById("delete").addEventListener("submit", (event) => {
      event.preventDefault();
  
        const bruger = JSON.parse(localStorage.getItem("bruger"));
        
        
        fetch("http://localhost:5555/brugere/slet", {
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
                location.href = "/logind.html";
             }
            })
      .catch(() => {
        window.alert("Der opstod en fejl");
      });
  });
});

//log ud 


        
    